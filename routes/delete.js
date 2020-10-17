const { Router } = require("express");
const { deleteProvider } = require("../db/deleteOperation");

/////////////////////////////////////////////////////////
// Router for deleting
/////////////////////////////////////////////////////////
const router = Router();

/////////////////////////////////////////////////////////
// Receive provider id and delete it
router.delete("/provider/:id", async (req, res) => {
  try {
    const result = await deleteProvider(req.params.id);
    if (result.deletedCount === 1)
      return res.status(200).send({ message: "Provider deleted" });
    else {
      return res.status(500).send({ message: "Provider was not deleted" });
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
