const db = require("../models");
const { Students } = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function(req, res) {
    db.Calendar
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Calendar
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Calendar
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Calendar
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Calendar
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  match: function(req, res) {
    db.Students
      .findById({_id: req.params.id})
      .then(student => {
        return db.Tutors.find({ availability: { $in: student.availability } })
      }).then(tutors => res.json(tutors))
      .catch(err => res.status(422).json(err));
  }
};