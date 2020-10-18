const { readProductData, readProductsData, readProductByParams } = require("../db/readOperation");
const { createProduct } = require("../db/createOperation");
const { deleteProduct } = require("../db/deleteOperation");
const { updateProduct } = require("../db/updateOperation");
const { validationResult } = require("express-validator");

//////////////////////////////////////////////
// Return product by ID in json format
const get = async (req, res) => {
  try {
    const data = await readProductData(req.params.id);
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Product not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//////////////////////////////////////////////
// Return product by params in json format
const getWithParams = async (req, res) => {
  try {
    const data = await readProductByParams(req.query);
    res.setHeader("Content-Type", "application/json");
    if (data.length === 0) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Product not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//////////////////////////////////////////////
// Return all product in json format
const getAll = async (req, res) => {
  try {
    const data = await readProductsData();
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Products not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//////////////////////////////////////////////
// Create product
const create = async (req, res) => {
  try {
    // validate data
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const { errors } = result;
      return res.status(400).send(JSON.stringify({ message: errors[0].msg }));
    }

    // try to save data
    const product = { ...req.body };
    const productModel = await createProduct(product);
    res.setHeader("Content-Type", "application/json");
    if (!productModel) {
      return res.status(500).send({ message: "Unable create product" });
    } else {
      return res.status(200).send({ message: "Product created" });
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//////////////////////////////////////////////
// Delete product by ID
const remove = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    if (result.deletedCount === 1)
      return res.status(200).send({ message: "Product deleted" });
    else {
      return res.status(500).send({ message: "Product was not deleted" });
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

//////////////////////////////////////////////
// Update product by ID
const update = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const { errors } = result;
      return res.status(400).send(JSON.stringify({ message: errors[0].msg }));
    }

    const product = { ...req.body };
    const productModel = await updateProduct(req.params.id, product);

    if (productModel) {
      return res.status(200).send({ message: "Product updated" });
    } else {
      return res.status(400).send({ message: "Unable update product" });
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { get, getAll, create, remove, update, getWithParams };
