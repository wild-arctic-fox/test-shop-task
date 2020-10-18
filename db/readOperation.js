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

const readProvidersData = async () => {
  try {
    const data = await ProviderModel.find();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const readProductData = async (id) => {
  try {
    const data = await ProductModel.findById(id);
    await data.populate("idProvider").execPopulate();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

//http://localhost:3000/read/product?amount=1007&name=Banana&providerName=Jane
const readProductByParams = async (params) => {
  try {
    const data = await ProductModel.find(params).populate("idProvider").exec();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const readProductsData = async () => {
  try {
    const data = await ProductModel.find().populate("idProvider").exec();
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  readProviderData,
  readProductData,
  readProvidersData,
  readProductsData,
  readProductByParams,
};
