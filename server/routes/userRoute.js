const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  findUser,
  getUsers,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:userId", findUser);
router.get("/", getUsers);

module.exports = router;
