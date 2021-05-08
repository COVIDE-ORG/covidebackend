const express = require("express");
var router = express();

const resource = require("../controllers/resources");

router.get("/oxygen/", resource.getOxygen);
router.get("/beds/", resource.getBeds);
router.get("/plasma/", resource.getPlasma);
router.get("/ambulance/", resource.getAmbulance);
router.get("/meds/", resource.getMeds);

module.exports = router;

