const express = require("express");
var router = express();

const volunteers = require("../controllers/volunteers");

router.get("/", volunteers.getVolunteers);
router.get("/count/:page", volunteers.getVolunteersByCount);

module.exports = router;