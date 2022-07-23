const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donations");
const { checkAuth } = require("../middlewares/authentication");

router.post("/create", checkAuth, donationController.createDonation);
router.get("/all", checkAuth, donationController.allDonations);
router.get("/filterDescription", checkAuth, donationController.donationByDescription);
router.get("/filterObject", checkAuth, donationController.donationByObject);
router.get("/filterById/:id", checkAuth, donationController.donationById);
router.put("/update/:id", checkAuth, donationController.updateDonationById);
router.delete("/delete/:id", checkAuth, donationController.deleteDonationById);

module.exports = router;