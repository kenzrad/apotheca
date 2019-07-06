const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
    firstName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    libraScore: String,
    allergins: Array

});

const User = mongoose.model("User", userSchema);

module.exports = User;