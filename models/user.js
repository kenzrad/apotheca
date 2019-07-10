const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
  id: { type: Number},
  userName: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  vegan: { type: Boolean },
  hypoallergenic: { type: Boolean }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
