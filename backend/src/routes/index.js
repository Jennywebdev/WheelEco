const express = require("express");

const router = express.Router();

const userManager = require("./user.routes");
const entrepriseManager = require("./entreprise.routes");
const carsManager = require("./cars.routes");

router.use("/users", userManager);
router.use("/entreprise", entrepriseManager);
router.use("/cars", carsManager);
module.exports = router;
