const db = require("../models");

// Defining methods for the ScanController 
module.exports = {
  findAll: function(req, res) {
    db.Scan.find(req.query)
      .then(dbScan => res.json(dbScan))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Scan.findById(req.params.id)
      .then(dbScan => res.json(dbScan))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Scan.create(req.body)
      .then(dbScan => res.json(dbScan))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Scan.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbScan => res.json(dbScan))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Scan.findById(req.params.id)
      .then(dbScan => dbScan.remove())
      .then(dbScan => res.json(dbScan))
      .catch(err => res.status(422).json(err));
  }
};