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
    componenets: { type: String, required: true },
    benefits: { type: String, required: true },
    category: { type: String, required: true },
    home_remedy: { type: String, required: true },
    products: [productSchema],
    date: { type: Date, default: Date.now }
});

const Element = mongoose.model("Element", elementSchema);
console.log("I am in the element models folder");
console.log(elementSchema);
console.log(Element);

module.exports = Element;

