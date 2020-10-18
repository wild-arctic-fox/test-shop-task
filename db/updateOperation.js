const ProviderModel = require("../models/providerModel");
const ProductModel = require("../models/productModel");

const updateProvider = async (id, provider) => {
  try {
    const model = await ProviderModel.findByIdAndUpdate({ _id: id }, provider);
    return model;
  } catch (e) {
    throw new Error(e);
  }
};

const updateProduct = async (id, product) => {
  try {
    const model = await ProductModel.findByIdAndUpdate({ _id: id }, product);
    return model;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { updateProvider, updateProduct };
