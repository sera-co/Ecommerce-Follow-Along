const { mongo, default: mongoose } = require("mongoose");

async function AddToCartController(req,res){
    const{productId,quantity}=req.body;
    const userId=req.userId;
    try{
        if(!mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).send({message:'Send valid UserId'})
        }
        const checkUserpresent=await UserModel.findOne({_id:userId})
        if(!checkUserpresent){
            return res.status(401).send({message:'Un-Authorized please sgnup'})
        }
        const checkIfProductPresent=await CartModel.findOne({_id:productId})
        if(checkIfProductPresent){
            return res.status(400).send({message:'Product aldready present in cart'})
        }
        await CartModel.create({
            productId,quantity,userId
        })
        return res.status(201).send({message:'Product is successfully created',success:true})

    }catch(err){
        return res.status(500).send({message:err.message,success:false})
    }
}

async function GetProductsForUser(req,res){
    const userId=req.userId;
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(401).send({message:"Un-Authorized please signup"})
        }
        const checkUserpresent=await UserModel.findOne({_id:userId})
        if(!checkUserpresent){
            return res.status(401).send({message:"Un-Authorized Please signup"})
        }
        const data=await CartModel.find({userId})
        return res.status(200).send({
            message:"Data is successfully fetched",success:true,cartData:data,
        })
    }catch(err){
        return res.status(500).send({message:err.message})
    }
}
module.exports={AddToCartController,GetProductsForUser}