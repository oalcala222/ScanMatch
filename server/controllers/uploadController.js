const db = require("../models");

// Defining methods for the ScanController 
module.exports = {
  findAll: function(req, res) {
    db.Upload.find(req.query)
      .then(dbupload => res.json(dbupload))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Upload.findById(req.params.id)
      .then(dbupload => res.json(dbupload))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Upload.create(req.body)
      .then(dbupload => res.json(dbupload))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Upload.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbupload => res.json(dbupload))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Upload.findById(req.params.id)
      .then(dbupload => dbupload.remove())
      .then(dbupload => res.json(dbupload))
      .catch(err => res.status(422).json(err));
  }
};