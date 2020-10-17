const ProviderModel = require("../models/providerModel");

const createProvider = async ({name, email, phone}) => {
  try {
    const providerModel = new ProviderModel( {name, email, phone} );
    await providerModel.save();
    return providerModel;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { createProvider };
