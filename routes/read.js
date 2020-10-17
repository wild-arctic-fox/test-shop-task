const { Router } = require("express");
const { readProviderData, readProductData } = require("../db/readOperation");

/////////////////////////////////////////////////////////
// Router for displaying providers and products
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Router for displaying providers by ID
router.get("/provider/:id", async (req, res) => {
  try {
    const data = await readProviderData(req.params.id);
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Provider not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

/////////////////////////////////////////////////////////
// Router for displaying product by ID
router.get("/product/:id", async (req, res) => {
  try {
    const data = await readProductData(req.params.id);
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Product not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
