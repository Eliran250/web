const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});


io.on("connection", (socket: any) => {
  socket.emit("Your id", socket.id);
  socket.on("Send message", (body: any) => {
    io.emit("Message", body)
  })
})


const connectMongo = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/users", {
      autoIndex: true
    });
    console.log("Connected to mongo db");
  } catch (error) {
    console.error(error);
  }
}


server.listen(3000, () => {
  connectMongo()
  console.log("Server running on port 3000");
})