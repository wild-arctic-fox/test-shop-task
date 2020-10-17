const { Router } = require("express");
const { providerDataValidator } = require("../helpers/utils/validators");
const { validationResult } = require("express-validator");
const { createProvider } = require("../db/createOperation");

/////////////////////////////////////////////////////////
// Router for adding a new Providers and Products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive post data
router.post("/provider", providerDataValidator, async (req, res) => {
  try {

    // validate data
    const { name, email, phone } = req.body;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const { errors } = result;
      return res.status(400).send(JSON.stringify({ message: errors[0].msg }));
    }

    // try to save data
    const provider = { name, email, phone };
    const providerModel = await createProvider(provider);
    res.setHeader("Content-Type", "application/json");
    if (!providerModel) {
      return res.status(500).send({ message: "Unable create provider" });
    } else {
      return res.status(200).send({ message: "Provider created" });
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
