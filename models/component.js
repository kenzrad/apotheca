const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema({
    component: { type: String, required: true },
    description: { type: String, required: true },
    source: String

});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;