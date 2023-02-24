const express = require("express");

const { userController } = require("../controllers");

const router = express.Router();

router.post("/create", userController.create);
router.post("/login", userController.login);
router.get("/findAll", userController.findAll);
router.get("/findOne/:userId", userController.findOne);
router.put("/update/:userId", userController.update);
router.delete("/delete/:userId", userController.purge);

module.exports = router;
