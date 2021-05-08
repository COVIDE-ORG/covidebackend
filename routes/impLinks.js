const express = require("express");
var router = express();

const impLinks = require("../controllers/impLinks");

router.get("/", impLinks.getImpLinks);

module.exports = router;