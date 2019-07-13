const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const userProfile = new Schema({
    id: { type: Number, required: true },
    userId: { type: Number, required: true },
    userName: { type: String, required: true },
    libraOverall: { type: String, required: true },
    libraCategories: [{
        kalom: String,
        novo: String,
        elavo: String,
        bibe: String
    }],
    elements: { type: Array, required: true }
});

const User = mongoose.model("UserProfile", userProfile);

module.exports = User;