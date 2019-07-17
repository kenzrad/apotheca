const db = require("../models");
//Defining methods for the Login Controller

module.exports = {
    findAll: function (req, res) {
        db.Login
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    login: function (req, res) {
        db.Login
            .findOne({ userName: req.body.Loginname, password: req.body.password })
            .then(Login => res.json(Login))
            .catch(err => res.status(422).status(422).json(err));
    },
    findById: function (req, res) {
        db.Login
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Login
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Login
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Login
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};