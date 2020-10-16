const { Router } = require("express");
const ProviderModel = require("../models/providerModel");

/////////////////////////////////////////////////////////
// Router for displaying providers
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Router for displaying providers by ID
router.get("/:id", async (req, res) => {
  try {
    const data = await ProviderModel.findById(req.params.id);
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      res.send(JSON.stringify({ error: "this provider is not found" }));
    } else {
      res.send(JSON.stringify(data));
    }
  } catch (e) {
    throw new Error();
  }
});

module.exports = router;
