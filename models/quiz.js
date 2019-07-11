const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//quiz schema


const quizSchema = new Schema({
    question: { type: String, required: true },
    options: [{
        A: {
            option: String,
            category: String
        },
        B: {
            option: String,
            category: String
        },
        C: {
            option: String,
            category: String
        },
        D: {
            option: String,
            category: String
        }
    }],
    date: { type: Date, default: Date.now }
})


const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

