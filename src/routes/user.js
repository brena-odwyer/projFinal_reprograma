const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const { checkAuth } = require("../middlewares/authentication");

router.post("/register", userController.newUserRegister);
router.post("/login", userController.login);
router.put("/update/:id", checkAuth, userController.updateUserById);
router.delete("/delete/:id", checkAuth, userController.deleteUserById);

module.exports = router;