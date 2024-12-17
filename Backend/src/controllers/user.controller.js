const ErrorHandler = require("../utilities/ErrorHandler.js");
const UserModel = require("../models/user.model.js");
const transporter = require("../utilities/sendmail.js");
const jwt = require("jsonwebtoken");
const bcrypt=require('bcrypt');
require("dotenv").config({
  path: "./src/config/.env",
});

async function CreateUser(req, res) {
  try {
    const { Name, email, password } = req.body;
    const CheckUserPresent = await UserModel.findOne({
      email: email,
    });
    if (CheckUserPresent) {
      const error = new ErrorHandler("User Aldready present in DB", 400);

      return res.status(404).send({
        message: error.message,
        status: error.statusCode,
        success: false,
      });
    }
    const newUser = new UserModel({
      Name: Name,
      email: email,
      password: password,
    });
    const data = {
      Name,
      email,
      password,
    };
    const token = generateToken(data);
    await transporter.sendMail({
      to: "sera.shine@kalvium.community",
      from: "serajenova@gmail.com",
      subject: "verification email from e-commerce project",
      text: "Text",
      html: `<h1>Hello world http://localhost:5173/activation/${token}</h1>`,
    });
    await newUser.save();
    return res.send("User created successfully");
  } catch (er) {
    return res.status(400).send(er.message);
  }
}
const generateToken = (data) => {
  const token = jwt.sign(
    { name: data.name, email: data.email },
    process.env.SECRET_KEY
  );
  return token;
};

const verifyUser = () => {
  const verify = jwt.verify(token, process.env.SECRET_KEY);
  if (verify) {
    return verify;
  } else {
    return false;
  }
};

async function verifyUserController(req, res) {
  const { token } = req.params;
  try {
    if (verifyUser(token)) {
      return res.status(200).cookie();
    }
    return res.status(403).send({ message: "token expired" });
  } catch (er) {
    return res.status(403).send({ message: er.message });
  }
}
const signup=async(req,res)=>{
  const {name,email,password}=req.body;
  try{
    const CheckUserPresentinDB=await UserModel.findOne({email:email});
    if (CheckUserPresentinDB){
      return res.status(403).send({message:'User aldready present'})
    }
    bcrypt.hash(password,10,async function(err,hash){
      if(err){
        return res.status(403).send({message:'Please enter the password..'})
      }
      await UserModel({
        Name:name,
        email,
        password:hash,
      })
    })
    return res.status(201).send({message:'User created successfully..'})
  }catch(er){
    return res.status(500).send({message : er.message})
  }
}
const login=async(req,res)=>{
  const {email,password}=req.body;
  try{
    const CheckUserPresentinDB=await UserModel.findOne({email:email})
    bcrypt.compare(password,
      CheckUserPresentinDB.password,
      function(err,result) {
        if(err){
          return res.status(403).send({message:er.message});
        }
        let data={
          id:CheckUserPresentinDB._id,
          email,
          password
        }
        const token=generateToken(data);
        return res
        .status(200)
        .cookie('token',token)
        .send({ message: 'User logged in successfully..', success: true });
      }
    );

    
  } catch (er) {
    return res.status(403).send({ message: er.message, success: false });
  }
};

module.exports = { CreateUser, verifyUserController,signup,login };
