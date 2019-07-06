const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//remedy schema
const remedySchema = new Schema({
//anna had it
});

const Remedy = mongoose.model("Remedy", remedySchema);

module.exports = Remedy;