const { Router } = require("express");
const ProviderModel = require("../models/providerModel");
const ProductModel = require("../models/productModel");

/////////////////////////////////////////////////////////
// Router for displaying providers and products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Router for displaying providers by ID
router.get("/provider/:id", async (req, res) => {
  try {
    const data = await ProviderModel.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      res.send(JSON.stringify({ error: "this provider is not found" }));
    } else {
      res.send(JSON.stringify(data));
    }
  } catch (e) {
    throw new Error();
  }
});

/////////////////////////////////////////////////////////
// Router for displaying product by ID
router.get("/product/:id", async (req, res) => {
  try {
    const data = await ProductModel.findById(req.params.id).lean();
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      res.send(JSON.stringify({ error: "this product is not found" }));
    } else {
      res.send(JSON.stringify(data));
    }
  } catch (e) {
    throw new Error();
  }
});

module.exports = router;
