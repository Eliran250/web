const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

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

server.listen(3000, () => {
    console.log("Server running on port 3000");
})