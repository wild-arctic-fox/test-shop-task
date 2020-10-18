const { Router } = require("express");
const { providerDataValidator, productDataValidator } = require("../helpers/utils/validators");
const { create: createProvider } = require("../controllers/providerController");
const { create: createProduct } = require("../controllers/productController");

/////////////////////////////////////////////////////////
// Router for creating a new Providers and Products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Create provider
router.post("/provider", providerDataValidator, createProvider);

/////////////////////////////////////////////////////////
// Create product
router.post("/product", productDataValidator, createProduct);

module.exports = router;
