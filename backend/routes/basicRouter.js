const express = require("express");

// Add controllers and their URL paths here
const basicController = require("../controller/basicController");

const router = express.Router();

// Add paths to this router
router.post("/", basicController.basic);

module.exports = router;