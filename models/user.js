const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const userProfile = new Schema({
    id: { type: Number, required: true },
    userId: { type: Number, required: true },
    userName: { type: String, required: true },

    elements: { type: Array, required: true }
});

const User = mongoose.model("UserProfile", userProfile);

module.exports = User;