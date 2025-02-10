const mongoose= require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String,required:[true,'Please enter name']},
    email:{type:String,required:[true,"Please enter email"],unique:[true,"Please enter different email"]},
    password:{type:String,required:[true,"Please enter password"]},
    address:[
{
        city:{type:String},
        country:{type:String},
        add1:{type:String},
        add2:{type:String},
        zipCode:{type:Number},
        addressType:{type:String},}
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

module.exports=mongoose.model('User',userSchema);

