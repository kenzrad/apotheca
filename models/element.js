const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//element schema
const elementSchema = new Schema({
//anna has it
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;