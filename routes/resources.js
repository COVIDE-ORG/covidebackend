const express = require("express");
var router = express();

const resource = require("../controllers/resources");

router.get("/oxygen/", resource.getOxygen);
router.get("/beds/", resource.getBeds);
router.get("/plasma/", resource.getPlasma);
router.get("/ambulance/", resource.getAmbulance);
router.get("/meds/", resource.getMeds);
router.get("/volunteers/", resource.getVolunteers);
router.get("/misc/", resource.getMisc);

module.exports = router;

