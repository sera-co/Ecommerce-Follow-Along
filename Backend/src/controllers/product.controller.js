const fs = require("fs"); //file system
const cloudinary = require("../utilities/cloudinary.js");
const multer = require("multer");

const ProductModel = require("../models/Product.model.js");

const createProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;

  try {
    console.log(req.files, req.body);
    const arrayImage = req.files.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: "uploads",
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const dataImages = await Promise.all(arrayImage);
    const StoreProductDetails = await ProductModel.create({
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
      images: dataImages,
    });
    return res.status(201).send({
      message: "Image Successfully Uploaded",
      sucess: true,
      dataImages,
      StoreProductDetails,
    });
  } catch (er) {
    if (er instanceof multer.MulterError) {
      return res.status(400).send({
        message: "Multer error plese send image less than 5 ",
        success: false,
      });
    }
    console.log(er);
    return res.status(500).send({ message: er.message, success: false });
  }
};

const getProductDataController = async (req, res) => {
  try {
    const data = await ProductModel.find();
    return res
      .status(200)
      .send({ data, message: "Data fetched Successfully", success: true });
  } catch (err) {
    return res.status(500).send({ message: err.message, success: false });
  }
};

const updateProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;
  const { id } = req.params;

  console.log(req.files)
  try {
    const checkIfProductExists = await ProductModel.findOne({ _id: id });
    
    if (!checkIfProductExists) {
      return res.status(404).send({ message: 'Product Not Found' });
    }
    console.log("here...")

    const arrayImage =
      req.files &&
      req.files.map(async (singleFile, index) => {
        return cloudinary.uploader
          .upload(singleFile.path, {
            folder: 'uploads',
          })
          .then((result) => {
            fs.unlinkSync(singleFile.path);
            return result.url;
          });
      });
      console.log("jere",2)
    const Imagedata = req.files && (await Promise.all(arrayImage));
    const UpdatedImages = req.files ? Imagedata : req.body.images;
    const findAndUpdate = await ProductModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        rating,
        discountedPrice,
        originalPrice,
        quantity,
        category,
        images: UpdatedImages,
      },
      {
        new: true,
      }
    );

    return res.status(201).send({
      message: 'Document Updated Successfully',
      success: true,
      UpdatedResult: findAndUpdate,
    });
  } catch (er) {
    console.log(er.message);
    return res.status(500).send({ message: er.message, success: false });
  }
};
const getSingleProductDocumentController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProductModel.findOne({ _id: id });
    console.log(data);
    if (!data) {
      return res.status(404).send({ Message: "Product Not Found" });
    }

    return res
      .status(200)
      .send({ message: "Product Successfully fetched", data, success: true });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
};

const deleteSingleProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const data = await ProductModel.findOne({ _id: id });
    console.log(data);
    if (!data) {
      return res.status(404).send({ Message: "Product Not Found" });
    }

    await ProductModel.findByIdAndDelete({ _id: id });
    const newData = await ProductModel.find();
    return res.status(200).send({
      message: "Product Successfully fetched",
      data: newData,
      success: true,
    });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
};

module.exports = {
  createProductController,
  getProductDataController,
  updateProductController,
  getSingleProductDocumentController,
  deleteSingleProduct,
};
