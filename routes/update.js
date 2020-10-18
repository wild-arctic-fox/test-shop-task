const { Router } = require("express");
const { providerDataValidator } = require("../helpers/utils/validators");
const { update: updateProvider } = require("../controllers/providerController");

/////////////////////////////////////////////////////////
// Router for updating
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Update provider
router.put("/provider/:id", providerDataValidator, updateProvider);

module.exports = router;
