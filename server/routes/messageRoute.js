const express = require("express");
const {
  createMessage,
  getMessages,
} = require("../controllers/messageContoller");
const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMessages);

module.exports = router;
