const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Quiz collection and inserts the remedies below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecadb"
);

const quizSeed = [
    {
        id: 1,
        question: "What is your age range?",
        options: [{
            A: {
                option: ">50",
                category: "kalon"
            },

            B: {
                option: "<20",
                category: "elavo"
            },
            C: {
                option: "20-30",
                category: "novo"
            },
            D: {
                optionD: "30-50",
                categoryD: "bibe"
            }

        }],

    },
    {
        id: 2,
        question: "When you wake up in the morning, what is your skin like?",
        options: [{
            A: {
                option: "Irritated, red and blotchy",
                category: "elavo"
            },

            B: {
                option: "Greasy, oil build up",
                category: "novo"
            },
            C: {
                option: "Dry and flakey",
                category: "bibe"
            },
            D: {
                optionD: "No issues, ready to go",
                categoryD: "kalon"
            }

        }],

    },
    {
        id: 3,
        question: "On a day to day basis, how is your skin normally?",
        options: [{
            A: {
                option: "Visible pores along t-zone, oil build up throughout the day",
                category: "novo"
            },

            B: {
                option: "Skin is tight and irritated, dry patches along the cheeks and chin",
                category: "bibe"
            },
            C: {
                option: "Rarely get breakouts, little pores along t-zone with little to no oil build up",
                category: "kalon"
            },
            D: {
                optionD: "Frequently have breakouts and have irritated skin",
                categoryD: "elavo"
            }

        }],

    },
    {
        id: 4,
        question: "What is your top skin concern?",
        options: [{
            A: {
                option: "Need Hydration",
                category: "bibe"
            },

            B: {
                option: "Anti-Aging",
                category: "kalon"
            },
            C: {
                option: "Acne Control",
                category: "elavo"
            },
            D: {
                optionD: "Oil Control",
                categoryD: "novo"
            }

        }],

    },
    {
        id: 5,
        question: "What is the closest description to your skin tone?",
        options: [{
            A: {
                option: "Fair",
                category: "kalon"
            },

            B: {
                option: "Medium-Fair",
                category: "bibe"
            },
            C: {
                option: "Medium-Dark",
                category: "novo"
            },
            D: {
                optionD: "Dark",
                categoryD: "elavo"
            }

        }],

    },
    {
        id: 6,
        question: "How sensitive is your skin?",
        options: [{
            A: {
                option: "Sensitive Skin Conditions (i.e. Eczema)",
                category: "bibe"
            },

            B: {
                option: "Breakout very easily, very prone to irritation",
                category: "elavo"
            },
            C: {
                option: "Certain things will cause a reaction, but usually it is okay",
                category: "novo"
            },
            D: {
                optionD: "Not sensitive",
                categoryD: "kalon"
            }

        }],

    },
    {
        id: 7,
        question: "What is your current living environment?",
        options: [{
            A: {
                option: "Rural Location",
                category: "kalon"
            },

            B: {
                option: "City Life",
                category: "elavo"
            },
            C: {
                option: "Humid",
                category: "novo"
            },
            D: {
                optionD: "Dry",
                categoryD: "bibe"
            }

        }],

    },
    {
        id: 8,
        question: "How often do you use sunscreen?",
        options: [{
            A: {
                option: "Always",
                category: "bibe"
            },

            B: {
                option: "Often",
                category: "novo"
            },
            C: {
                option: "Sometimes",
                category: "elavo"
            },
            D: {
                optionD: "Rarely",
                categoryD: "kalon"
            }

        }],

    },
    {
        id: 9,
        question: "Out of the following what is your top skin concern?",
        options: [{
            A: {
                option: "Post-breakout scarring",
                category: "elavo"
            },

            B: {
                option: "Sun-damage",
                category: "kalon"
            },
            C: {
                option: "Tight cheeks, chapped lips",
                category: "bibe"
            },
            D: {
                optionD: "Large, visible pores",
                categoryD: "novo"
            }

        }],

    },
    {
        id: 10,
        question: "Out of the following what is your top skin concern?",
        options: [{
            A: {
                option: "Wrinkles",
                category: "kalon"
            },

            B: {
                option: "Dehyrated skin",
                category: "bibe"
            },
            C: {
                option: "T-zone oil",
                category: "novo"
            },
            D: {
                optionD: "Irritated/Sensitive Skin",
                categoryD: "elavo"
            }

        }],

    }
]






db.Quiz
    .remove({})
    .then(() => db.Quiz.collection.insertMany(quizSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });