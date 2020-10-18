const { Router } = require("express");
const { remove: removeProvider } = require("../controllers/providerController");

/////////////////////////////////////////////////////////
// Router for deleting
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive provider id and delete it
router.delete("/provider/:id", removeProvider);

module.exports = router;
