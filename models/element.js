const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//commented this out during troubleshooting - not sure if it needs to be seperated out this way based on how you are organizing, so I left it
//element schema

// const productSchema = new Schema({
//     name: String,
//     src: String,
//     price: String,
//     tags: String
// })


const elementSchema = new Schema({
    name: { type: String, required: true },
    components: [{ type: String, required: true }],
    benefits: [{ type: String, required: true }],
    category: { type: String, required: true },
    home_remedy: [{ type: String, required: false }],
    products: [{
        name: String,
        src: String,
        price: String,
        tags: String
    }],
    date: { type: Date, default: Date.now }
});

const Element = mongoose.model("Element", elementSchema);

module.exports = Element;

