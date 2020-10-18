const ProviderModel = require("../models/providerModel");
const ProductModel = require("../models/productModel");

const createProvider = async ({ name, email, phone }) => {
  try {
    const model = new ProviderModel({ name, email, phone });
    await model.save();
    return model;
  } catch (e) {
    throw new Error(e);
  }
};

const createProduct = async (product) => {
  try {
    const model = new ProductModel({ ...product });
    await model.save();
    return model;
  } catch (e) {
    console.log(e)
    throw new Error(e);
  }
};

module.exports = { createProvider, createProduct };
