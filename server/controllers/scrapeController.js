var mongoose = require("mongoose")
var express = require("express");
var router = express.Router();

//using axios and cheerio for scraping
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models")

router.get("/", function (req, res) {
  res.render("index")
})

router.get("/saved", function (req, res) {
  res.render("saved");
})

// A GET route for scraping the echoJS website
router.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.scanmatch.com/scrapeinfo").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    $("div.item-info").each(function (i, element) {

      var result = {};
      result.title = $(this).children("h2.title").children("a").text();
      result.link = $(this).children("h2.title").children("a").attr("href");
      result.summary = $(this).children("p.teaser").children("a").text();
      result.save = false;

      // Create a new scanData using the `result` object built from scraping.  Activity 20
      db.scanData.create(result)
        .then(function (dbscanData) {
          console.log(dbscanData);
        })
        .catch(function (err) {
          console.log(err);
        });
    });

    // Send a message to the client
    res.send("Scrape Complete");
  });
});

// Route for getting all scanData from the db.  Activity 20
router.get("/scanData", function (req, res) {
  // Grab every document in the scanData collection
  db.scanData.find({})
    .then(function (dbscanData) {
      // If we were able to successfully find scanData, send them back to the client
      res.json(dbscanData);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for grabbing a specific scanData by id, populate it with it's User
router.get("/scanData/:id", function (req, res) {
  console.log(req.params.id);
  db.User.find({ scanData: req.params.id })
    .then(function (dbscanData) {
      res.json(dbscanData)
    })
    .catch(function (error) {
      res.json(error)
    });
})

// Route for saving/updating/comparing an scanData's associated User.  Activity 20
router.post("/scanData/:id", function (req, res) {
  db.User.create(req.body)
    .then(function (dbUser) {
      return db.User.findOneAndUpdate({ _id: dbUser._id }, { scanData: req.params.id }, { new: true });//{new:true}
    })
    .catch(function (error) {
      res.json(error)
    })
})
router.post("/savethisscanData/:id", function (req, res) {
  db.scanData.findOneAndUpdate({ _id: req.params.id }, { artsave: true })
    .then(function (dbUser) {
      res.json(dbUser)
    })
    .catch(function (error) {
      res.json(error)
    })
})

//deletes scanData and all Users associated with it
router.delete("/deletethisscanData/:id", function (req, res) {
  db.User.deleteMany({ scanData: req.params.id })
    .then(function () {
      db.scanData.deleteOne({ _id: req.params.id })
        .then(function () {
          res.send();
        })
        .catch(function (err) {
          console.log(err);
        })
    })
    .catch(function (error) {
      res.json(error)
    })
})

module.exports = router;