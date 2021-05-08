const express = require("express");
var router = express();

const help = require("../controllers/askforhelp");

router.get("/", help.getHelp);

router.post("/create", help.addHelp);
module.exports = router;