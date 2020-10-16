const { Router } = require("express");
const ProviderModel = require("../models/providerModel");

/////////////////////////////////////////////////////////
// Router for adding a new Providers and Products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive post data
router.post("/provider", async (req, res) => {
  const { name, email, phone } = req.body;
  const providerModel = new ProviderModel({ name, email, phone });
  try {
    await providerModel.save();
    res.setHeader("Content-Type", "application/json");
    if (!providerModel) {
      res.send(JSON.stringify({ error: "something went wrong" }));
    } else {
      res.send(JSON.stringify(providerModel));
    }
  } catch (e) {
    console.log(e);
    throw new Exception(e);
  }
});

module.exports = router;
