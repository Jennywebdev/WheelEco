const router = require("express").Router();

const carController = require("../controllers/carsController");

router.get("/allentreprise", carController.findCarsByEntreprise);
router.post("/", carController.add);

module.exports = router;
