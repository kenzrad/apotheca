const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Remedies collection and inserts the remedies below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/apothecadb");

const userSeed = [
  {
    id: 1,
    userName: "bananawarner",
    password: "bootcamp2019",
    firstName: "Anna",
    vegan: false,
    hypoallergenic: false
  },
  {
    id: 2,
    userName: "hackerpat",
    password: "rickybobby",
    firstName: "Patrick",
    vegan: false,
    hypoallergenic: false

  }
];

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
