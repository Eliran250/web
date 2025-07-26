const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    country: {
        type: String,
        required: [true, "Country is required"]
    },
    phone: {
        type: String,
        required: [true, "Country is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
})

const userModel = mongoose.model("users", userSchema)
export default userModel;
