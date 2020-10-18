const { model, Schema } = require("mongoose");

/////////////////////////////////////////////////////////
// Product Model Schema
/////////////////////////////////////////////////////////
const productModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
  },
  measurability: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  idProvider: {
    type: Schema.Types.ObjectId,
    ref: "ProviderModel",
    required: true,
  },
});

module.exports = model("ProductModel", productModel);
