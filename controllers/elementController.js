const db = require("../models");
//Defining methods for the elementController


module.exports = {
    findAll: function (req, res) {
        db.Element
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    restrictions: function (req, res) {
        db.Element
            .find({ vegan: req.body.vegan, hypoallergenic: req.body.hypoallergenic })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).status(422).json(err));
    },
    findById: function (req, res) {
        db.Element
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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