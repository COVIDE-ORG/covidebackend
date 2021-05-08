const express = require("express");
var router = express();

const resource = require("../controllers/resources");

router.get("/oxygen/", resource.getOxygen);
router.get("/oxygen/count/:page", resource.getOxygenByCount);
router.get("/beds/", resource.getBeds);
router.get("/beds/count/:page", resource.getBedsByCount);
router.get("/plasma/", resource.getPlasma);
router.get("/plasma/count/:page", resource.getPlasmaByCount);
router.get("/ambulance/", resource.getAmbulance);
router.get("/ambulance/count/:page", resource.getAmbulanceByCount);
router.get("/meds/", resource.getMeds);
router.get("/meds/count/:page", resource.getMedsByCount);
router.get("/volunteers/", resource.getVolunteers);
router.get("/volunteers/count/:page", resource.getVolunteersByCount);

module.exports = router;

