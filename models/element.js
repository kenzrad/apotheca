const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//element schema

const productSchema = new Schema({
    name: String,
    src: String,
    price: String,
    tags: String
})

const elementSchema = new Schema({
    name: { type: String, required: true },
    componenets: { type: Array, required: true },
    benefits: { type: Array, required: true },
    category: { type: String, required: true },
    home_remedy: { type: Array, required: true },
    products: [productSchema],
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;

