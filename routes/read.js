const { Router } = require("express");
const { get: getProvider } = require("../controllers/providerController");
const { get: getProduct } = require("../controllers/productController");
const { getAll: getAllProviders } = require("../controllers/providerController");

/////////////////////////////////////////////////////////
// Router for getting providers and products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Router for getting providers by ID
router.get("/provider/:id", getProvider);

/////////////////////////////////////////////////////////
// Router for getting all providers
router.get("/providers", getAllProviders);

/////////////////////////////////////////////////////////
// Router for getting product by ID
router.get("/product/:id", getProduct);

module.exports = router;
