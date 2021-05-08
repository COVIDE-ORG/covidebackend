const express = require("express");
var router = express();

const volunteers = require("../controllers/volunteers");

router.get("/", volunteers.getVolunteers);

module.exports = router;