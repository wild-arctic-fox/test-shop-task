const { Router } = require("express");
const ProviderModel = require("../models/providerModel");
const { providerDataValidator } = require("../utils/validators");
const { validationResult } = require("express-validator");

/////////////////////////////////////////////////////////
// Router for updating
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive provider data and update it
router.put("/provider/:id", providerDataValidator, async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const provider = {
      name,
      email,
      phone,
    };

    const result = validationResult(req);
    if (!result.isEmpty()) {
      const { errors } = result;
      return res.status(400).send(JSON.stringify({ error: errors[0].msg }));
    }

    const providerModel = await ProviderModel.findByIdAndUpdate(
      { _id: req.params.id },
      provider
    );

    if (providerModel) {
      return res.status(200).send({ message: "Provider updated." });
    } else {
      return res.status(404).send({ message: "Unable update provider." });
    }
  } catch (e) {
    return res.status(400).send({ message: "Bad request." });
  }
});

module.exports = router;
