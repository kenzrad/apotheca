const db = require("../models");
console.log("i am in the elementController file")
//Defining methods for the elementController
// console.log(db.Element);

module.exports = {
    findAll: function (req, res) {
        console.log(req.query);
        db.Element
            .find(req.query)
            // .sort({ date: -1 })
            .then(dbModel => {
                res.json(dbModel);
                console.log("this is the dbModel", dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Element
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req);
        console.log(res);
    },
    create: function (req, res) {
        db.Element
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Element
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Element
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};