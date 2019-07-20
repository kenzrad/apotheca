const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema
const loginSchema = new Schema({
  userName: { type: String },
  password: { type: String },
  firstName: { type: String },
  vegan: { type: Boolean },
  hypoallergenic: { type: Boolean },
  libraOverall: { type: String },
  libraCategories: { type: Object },
  elements: [{ type: Object }],
  componenets: { type: Array },
  remedies: [{ type: Array }]
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
