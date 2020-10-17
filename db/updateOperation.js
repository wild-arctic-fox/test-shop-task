const ProviderModel = require("../models/providerModel");

const updateProvider = async (id, provider) => {
  try {
    const providerModel = await ProviderModel.findByIdAndUpdate(
      { _id: id },
      provider
    );
    return providerModel;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { updateProvider };
