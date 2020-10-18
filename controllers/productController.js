const { readProductData, readProductsData } = require("../db/readOperation");
const { createProduct } = require("../db/createOperation");
const { validationResult } = require("express-validator");

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

module.exports = { get, getAll, create };
