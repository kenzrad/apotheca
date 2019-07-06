const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
//anna had it
});

const User = mongoose.model("User", userSchema);

module.exports = User;