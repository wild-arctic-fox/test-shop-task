const ProductModel = require("../models/productModel");
const ProviderModel = require("../models/providerModel");

const readProviderData = async (id) => {
  try {
    const data = await ProviderModel.findById(id);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const readProductData = async (id) => {
  try {
    const data = await ProductModel.findById(id);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { readProviderData, readProductData };
