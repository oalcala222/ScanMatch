const router = require("express").Router();
const scrapeController = require("./controllers/scrapeController");

// Matches with "/api/books" Activity 11
router.route("/")
  .get(scrapeController.findAll)
  .post(scrapeController.create);

module.exports = router;
