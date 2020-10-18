const { Router } = require("express");
const { remove: removeProvider } = require("../controllers/providerController");
const { remove: removeProduct } = require("../controllers/productController");

/////////////////////////////////////////////////////////
// Router for deleting
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Delete provider by Id
router.delete("/provider/:id", removeProvider);

/////////////////////////////////////////////////////////
// Delete product by Id
router.delete("/product/:id", removeProduct);

module.exports = router;
