const { model, Schema } = require("mongoose");

/////////////////////////////////////////////////////////
// Provider Model Schema
/////////////////////////////////////////////////////////
const providerModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = model("ProviderModel", providerModel);
