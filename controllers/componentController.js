const db = require("../models");
//Defining methods for the componentController


module.exports = {
    findAll: function (req, res) {
        db.Component
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    componentId: function (req, res) {
        db.Component
            .find({ id: req.body.componentId })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).status(422).json(err));
    },

    findById: function (req, res) {
        db.Component
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Component
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Component
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Component
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};