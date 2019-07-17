const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const loginSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  vegan: { type: Boolean },
  hypoallergenic: { type: Boolean },
  libraOverall: { type: String, required: true },
  elements: { type: Array, required: true }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
