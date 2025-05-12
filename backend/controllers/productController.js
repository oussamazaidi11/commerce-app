const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(__dirname, "..", "public/uploads/");
const diskPath = path.join(__dirname, "..", "public/");

const getProducts = asyncHandler(async (req, res) => {
  const { designation } = req.query;
  const search = {};
  if (designation) {
    search.designation = { $regex: new RegExp(designation, "i") };
  }

  const products = await Product.find(search).sort({ createdAt: -1 });

  setTimeout(() => {
    res.status(200).json({ products });
  }, 4);
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  setTimeout(() => {
    res.status(200).json({ product });
  }, 0);
});

const createProduct = asyncHandler(async (req, res) => {
  let file = req.files.file;
  let fileName = new Date().getTime() + file.name;

  let fileUrl = "uploads/" + fileName;

  file.mv(uploadPath + fileName, function (err) {
    if (err) return res.status(500).send(err);
  });

  const { designation, prix, description } = req.body;

  const newProduct = await Product.create({
    designation,
    prix,
    description,
    fileUrl,
  });
  res.status(200).json({ product: newProduct });
});
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { designation, prix, description, fileUrl } = req.body;
  const filePath = diskPath + fileUrl;

  let newFileUrl = "";

  if (req.files) {
    let file = req.files.file;
    let fileName = file.name;
    newFileUrl = "uploads/" + fileName;

    file.mv(uploadPath + fileName, function (err) {
      if (err) return res.status(500).send(err);
    });
  }

  const product = await Product.findByIdAndUpdate(
    id,
    {
      designation,
      prix,
      description,
      fileUrl: newFileUrl ? newFileUrl : fileUrl,
    },
    { new: true }
  );

  res.status(200).json({ product });
});
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const record = await Product.findById(id);
  const filePath = diskPath + record.fileUrl;

  try {
    const product = await Product.findByIdAndDelete(id);
    fs.unlink(filePath, (err) => {
      if (err) {
        return res.status(500).send(`Error deleting file: ${err.message}`);
      } else {
        res.status(200).json({ product });
      }
    });
  } catch (err) {
    res.status(500);
    throw new Error("product not found");
  }
});

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
