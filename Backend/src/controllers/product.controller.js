const fs = require("fs"); //file system
const cloudinary = require("../utilities/cloudinary.js");
const multer = require("multer");

const ProductModel = require("../models/Product.model.js");

const createProductController = async (req, res) => {
  const {
    title,
    description,
    discountedPrice,
    originalPrice,
    stockQuantity,
    category,
    rating,
  } = req.body;
  try {
    console.log(req.files, req.body);
    const ImgArray = req.files.map(async(singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: "uploads",
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        })
    });

    const dataImgs = await Promise.all(ImgArray);
    console.log("Passed clouinary")
    const StoreproductDetails = await ProductModel.create({
      title,
      description,
      discountedPrice,
      originalPrice,
      quantity: stockQuantity,
      category,
      rating,
      Imgs: dataImgs,
    });

    return res.status(201).send({
      message: "Image Successfully uploaded",
      success: true,
      dataImgs,
      StoreproductDetails,
    });
  } catch (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).send({
        message: "Multer error please send inage less than 5",
        success: false,
      });
    }
    res.status(500).send({ message: err.message, success: false });
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
    discountPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;
  const { id } = req.params;
  try {
    const checkifproductExists = await ProductModel.findOne({ _id: id });

    if (!checkifproductExists) {
      return res.status(404).send({ message: "Product not found" });
    }

    const ImgArray = req.files.map((singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: "uploads",
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const Imagedata = await Promise.all(ImgArray);
    const UpdatedImages = req.files ? Imagedata : req.body.images;
    const findAndupdate = await productModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        rating,
        discountPrice,
        originalPrice,
        quantity,
        category,
        images: Imagedata,
      },
      { new: true }
    );

    return res
      .status(201)
      .send({
        message: "Document updation successfull",
        success: true,
        updatedProduct: findAndUpdate,
      });
  } catch (err) {
    res.status(500).send({ message: err.message, success: false });
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
