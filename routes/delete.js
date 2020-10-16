const { Router } = require("express");
const ProviderModel = require("../models/providerModel");

/////////////////////////////////////////////////////////
// Router for deleting
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive provider id and delete it
router.delete("/provider/:id", async (req, res) => {
  try {
    const result = await ProviderModel.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1)
      return res.status(200).send({ message: "Provider deleted." });
    else {
      return res.status(500).send({ message: "Unable delete user." });
    }
  } catch (e) {
    return res.status(400).send({ message: "Bad request." });
  }
});

module.exports = router;
