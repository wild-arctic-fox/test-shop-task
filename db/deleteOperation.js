const ProviderModel = require("../models/providerModel");

const deleteProvider = async (id) => {
  try {
    const result = await ProviderModel.deleteOne({ _id: id });
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { deleteProvider };
