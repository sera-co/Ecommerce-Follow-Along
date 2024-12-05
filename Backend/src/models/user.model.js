const mongoose= require('mongoose');
const userSchema=new mongoose.Schema({
    Name:{type:String,require:[true,'Please enter name']},
    email:{type:String,require:[true,"Please enter email"],unique:[true,"Please enter different email"]},
    password:{type:String,require:[true,"Please enter password"]},
    address:[
        {city:String},
        {country:String},
        {address1:String},
        {address2:String},
        {zipCode:String},
        {adressType:String},
    ],
    role:{type:String,default:"user"},
    avatar:{
        url:{type:String,require:true},
        public_id:{type:String,require:true}
        },
        resetPasswordToken:String,
        resetPasswordTime:Date,

},
{versionKey:false});
const Usermodel=mongoose.model('User',userSchema);
module.exports=Usermodel;
