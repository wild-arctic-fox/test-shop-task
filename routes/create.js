const { Router } = require("express");
const { providerDataValidator } = require("../helpers/utils/validators");
const { create: createProvider } = require("../controllers/providerController");

/////////////////////////////////////////////////////////
// Router for adding a new Providers and Products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Create provider
router.post("/provider", providerDataValidator, createProvider);

module.exports = router;
