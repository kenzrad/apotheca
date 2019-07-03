const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema({
//anna has it
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;