const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");
const { checkAuth } = require("../middlewares/authentication");


router.post("/create", checkAuth, studentController.createStudent);
router.get("/all", checkAuth, studentController.allStudents);
router.get("/filterName", checkAuth, studentController.studentByName);
router.get("/filterUniversity", checkAuth, studentController.studentByUniveristy);
router.get("/filterDonation", checkAuth, studentController.studentByDonationTrue);
router.get("/find/:id", checkAuth, studentController.studentById);
router.put("/update/:id", checkAuth, studentController.updateStudentById);
router.delete("/delete/:id", checkAuth, studentController.deleteStudentById);

module.exports = router;