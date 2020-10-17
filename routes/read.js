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
      return res.status(404).send(JSON.stringify({ message: "Provider not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

/////////////////////////////////////////////////////////
// Router for displaying product by ID
router.get("/product/:id", async (req, res) => {
  try {
    const data = await ProductModel.findById(req.params.id).lean();
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Product not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
