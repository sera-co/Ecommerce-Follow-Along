const mongoose= require('mongoose');
const userSchema=new mongoose.Schema({
    Name:{type:String,required:[true,'Please enter name']},
    email:{type:String,required:[true,"Please enter email"],unique:[true,"Please enter different email"]},
    password:{type:String,required:[true,"Please enter password"]},
    address:[
{
        city:{type:String},
        country:{type:String},
        add1:{type:String},
        add2:{type:String},
        zipCode:{type:Number},
        adressType:{type:String},}
    ],
    role:{type:String,default:"user"},
    avatar:{
        url:{type:String,required:true},
        public_id:{type:String,required:true}
        },
        resetPasswordToken:String,
        resetPasswordTime:Date,

},
{versionKey:false});
const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel;
