const { Router } = require("express");
const { providerDataValidator, productDataValidator } = require("../helpers/utils/validators");
const { update: updateProvider } = require("../controllers/providerController");
const { update: updateProduct } = require("../controllers/productController");

/////////////////////////////////////////////////////////
// Router for updating
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Update provider
router.put("/provider/:id", providerDataValidator, updateProvider);

/////////////////////////////////////////////////////////
// Update product
router.put("/product/:id", productDataValidator, updateProduct);

module.exports = router;
