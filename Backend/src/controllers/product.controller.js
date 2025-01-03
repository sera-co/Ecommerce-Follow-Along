const multer=require('multer');
const cloudinary=require('../utilities/cloudinary.js');
const fs=require('fs');
const ProductModel=require('../models/Product.model.js');

const createProductController=async(requestAnimationFrame,res)=>{
    const{
        title,
        description,
        rating,
        discountedprice,
        originalprice,
        quantity,
        category,
    }=req.body;

    try{
        const arrayImage=req.files.map(async(singleFile,index)=>{
            return cloudinary.uploader.upload(singleFile.path,{
                folder:'uploads',
            })
            .then((result)=>{
                fs.unlinkSync(singleFile.path);
                return result.url;
            })
        })

        const dataImages=await Promise.all(arrayImage);
        const StoreProductDetails=await ProductModel.create({
            title,
            description,
            rating,
            discountedprice,
            originalprice,
            quantity,
            category,
            images:dataImages,

        })
        return res.status(201).send({
            message:'Image Successfully Uploaded',
            success:true,
            dataImages,
            StoreProductDetails,
        })
    }catch(err){
        if(err instanceof multer.MulterError){
            return res.status(400).send({
                message:'Multer error please send image less than 5',
                success:false,
            })
        }
        return res.status(500).send({message:err.message,sucess:false})
    }
}
module.exports={createProductController};