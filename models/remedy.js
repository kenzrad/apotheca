const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remedySchema = new Schema({
    title: { type: Array, required: true },
    ingredients: { type: Array, required: true },
    instructions: { type: Array, required: true },
    time: { type: Array, required: true },
    consistency: { type: String, required: true },
    works: { type: Array, required: true },
    source: String

});

const Remedy = mongoose.model("Remedy", remedySchema);

module.exports = Remedy;
