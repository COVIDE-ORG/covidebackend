const express = require("express");
var router = express();

const config = require("../controllers/config");

router.get("/concheck", config.getMetadata);

module.exports = router;