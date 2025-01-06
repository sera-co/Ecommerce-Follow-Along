const mongoose=require('mongoose');

const SchemaObject={
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 1 },
    discountedprice: { type: Number, required: true },
    originalprice: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    category: { type: String, required: true, enum: ['male', 'female', 'kids'] },
    images: [
      {
        type: String,
        required: true,
        default:
          'https://as1.ftcdn.net/v2/jpg/04/15/57/10/1000_F_415571034_vkqsUX55YGrlSl0vxhKbfk2xfLczWszH.jpg',
      },
    ],
    
  };

  const productSchema=new mongoose.Schema(SchemaObject,{versionKey:false})
  const ProductModel=mongoose.model('Product',productSchema);

  module.exports=ProductModel;
  
