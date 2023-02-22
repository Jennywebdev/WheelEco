const router = require("express").Router();

const entrepriseController = require("../controllers/entrepriseController");

router.post("/", entrepriseController.add);

module.exports = router;
