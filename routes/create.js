const { Router } = require("express");
const ProviderModel = require("../models/providerModel");
const { providerDataValidator } = require("../helpers/utils/validators");
const { validationResult } = require("express-validator");

/////////////////////////////////////////////////////////
// Router for adding a new Providers and Products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive post data
router.post("/provider", providerDataValidator, async (req, res) => {
  const { name, email, phone } = req.body;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const { errors } = result;
    res.status(500).send(JSON.stringify({ error: errors[0].msg }));
    return;
  }
  const providerModel = new ProviderModel({ name, email, phone });
  try {
    await providerModel.save();
    res.setHeader("Content-Type", "application/json");
    if (!providerModel) {
      return res.status(400).send({ message: "Bad request." });
    } else {
      return res.status(200).send({ message: "Provider created." });
    }
  } catch (e) {
    console.log(e);
    throw new Exception(e);
  }
});

module.exports = router;
