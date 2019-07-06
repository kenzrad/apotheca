const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/apothecaDB"
);

const userSeed = [
    {
        id: 1,
        firstName: "Anna",
        userName: "bananawarner",
        password: "bootcamp2019",
        libraScore: [""],
        allergins: [""]
    }
]






db.Apotheca
    .remove({})
    .then(() => db.Apotheca.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });