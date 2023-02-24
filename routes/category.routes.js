const express = require("express");

const { categoryController } = require("../controllers");

const router = express.Router();

router.post("/create", categoryController.create);
router.get("/findAll", categoryController.findAll);
router.get("/findOne/:categoryId", categoryController.findOne);
router.put("/update/:categoryId", categoryController.update);
router.delete("/delete/:categoryId", categoryController.purge);

module.exports = router;
