const express = require("express");

const { organizationController } = require("../controllers");

const router = express.Router();

router.post("/create", organizationController.create);
router.get("/list", organizationController.findAll);
router.get("/findOne/:orgId", organizationController.findOne);
router.put("/update/:orgId", organizationController.update);
router.delete("/delete/:orgId", organizationController.purge);

module.exports = router;
