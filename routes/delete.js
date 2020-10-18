const { Router } = require("express");
const { remove: removeProvider } = require("../controllers/providerController");

/////////////////////////////////////////////////////////
// Router for deleting
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Delete provider by Id
router.delete("/provider/:id", removeProvider);

module.exports = router;
