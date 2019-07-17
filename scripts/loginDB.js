const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecadb"
);

const loginSeed = [
    {

        userName: "bananawarner",
        password: "bootcamp2019",
        firstName: "Anna",
        vegan: false,
        hypoallergenic: false,
        libraOverall: "Kalon",
        libraCategories: [{
            kalon: 4,
            novo: 1,
            elavo: 2,
            bibe: 1
        }],
        elements: []
    }
]



db.Login
    .remove({})
    .then(() => db.Login.collection.insertMany(loginSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });