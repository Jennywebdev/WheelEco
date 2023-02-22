const router = require("express").Router();

const usersController = require("../controllers/usersController");
const Validator = require("../middleware/Validator");

router.get("/", usersController.browse);
router.get("/:id", usersController.read);
router.put("/:id", usersController.edit);
router.post("/", usersController.add);
router.delete("/:id", usersController.destroy);

router.post("/login", Validator("login"), usersController.login);

module.exports = router;
