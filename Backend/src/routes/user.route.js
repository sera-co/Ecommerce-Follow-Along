const express = require("express");
const multer = require("multer");
const {
  CreateUser,
  verifyUserController,
  signup,
  login,
  getUSerData,
  AddAdressController,GetAdressController
} = require("../controllers/user.controller");
const upload = require("../middlewares/multer");
const jwt = require("jsonwebtoken");
const verifyUser=require('../middlewares/jwt-verify')
const router = express.Router();
router.post("/create-user", upload.single("file"), CreateUser);
router.get("/activation/:token", verifyUserController);
router.post("/signup", upload.single("file"), signup);
router.post("/login", login);
router.get('/user-data',verifyUser,getUSerData)
router.post('/add-address',verifyUser,AddAdressController)
router.get('/get-addresses',verifyUser,GetAdressController)

module.exports = router;
