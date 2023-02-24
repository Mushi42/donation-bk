const express = require("express");

const { charityController } = require("../controllers");

const router = express.Router();

router.post("/create", charityController.create);
router.get("/organizationCharity/:orgId", charityController.organizationCharity);
router.get("/userDonation/:userId", charityController.userDonation);
router.get("/findAll", charityController.findAll);

module.exports = router;
