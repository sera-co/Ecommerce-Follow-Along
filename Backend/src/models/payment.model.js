const mongoose=require('mongoose')
const file={
    isPaid:{type:Boolean,required:true},
    user:{type:mongoose.Types.ObjectId,ref:'User',required:true},
    paidOrders:{type:mongoose.Types.ObjectId,ref:'Order',required:true},
    razorpay:{
        orederID:{type:String,required:true},
        paymentID:{type:String,required:true},
        signature:{type:String,required:true},

    }
};

const SchemaPayment=new mongoose.Schema(file,{versionKey:false})
const PaymentModel=mongoose.model('Payments',SchemaPayment)
module.exports=PaymentModel;