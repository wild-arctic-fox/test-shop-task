const ProviderModel = require("../models/providerModel");
const ProductModel = require("../models/productModel");

const deleteProvider = async (id) => {
  try {
    const result = await ProviderModel.deleteOne({ _id: id });
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteProduct = async (id) => {
  try {
    const result = await ProductModel.deleteOne({ _id: id });
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { deleteProvider, deleteProduct };
