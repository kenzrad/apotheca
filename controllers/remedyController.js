const db = require("../models");
//Defining methods for the remedyController


module.exports = {
    findAll: function (req, res) {
        db.Remedy
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    remedyId: function (req, res) {
        db.Remedy
            .find({ id: req.body.remedyId })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).status(422).json(err));
    },
    findById: function (req, res) {
        db.Remedy
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },


    create: function (req, res) {
        db.Remedy
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Remedy
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Remedy
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};