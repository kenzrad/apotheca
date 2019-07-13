const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apothecadb");

const userSeed = [
    {
        id: 1,
        userId: 1,
        firstName: "Anna",
        libraOverall: "Kalon",
        libraCategories: [{
            kalon: 40,
            novo: 10,
            elavo: 20,
            bibe: 10
        }],
        elements: []

    },

]

db.User.remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });