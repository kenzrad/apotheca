const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remedySchema = new Schema({
//anna had it
});

const Remedy = mongoose.model("Remedy", remedySchema);

module.exports = Remedy;