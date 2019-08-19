const router = require("express").Router();
const scanController = require("./controllers/scanDbController");

// Matches with "/api/books" Activity 11
router.route("/")
  .get(scanController.findAll)
  .post(scanController.create);

module.exports = router;
