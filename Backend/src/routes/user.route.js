const express = require("express");
const multer = require("multer");
const {
  CreateUser,
  verifyUserController,
  signup,
  login,
} = require("../controllers/user.controller");
const upload = require("../middlewares/multer");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/create-user", upload.single("file"), CreateUser);
router.get("/activation/:token", verifyUserController);
router.post("/signup", upload.single("file"), signup);
router.post("/login", login);
module.exports = router;
