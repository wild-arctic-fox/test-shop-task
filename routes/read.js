const { Router } = require("express");
const { get: getProvider } = require("../controllers/providerController");
const { get: getProduct } = require("../controllers/providerController");

/////////////////////////////////////////////////////////
// Router for displaying providers and products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Router for displaying providers by ID
router.get("/provider/:id", getProvider);

/////////////////////////////////////////////////////////
// Router for displaying product by ID
router.get("/product/:id", getProduct);

module.exports = router;
