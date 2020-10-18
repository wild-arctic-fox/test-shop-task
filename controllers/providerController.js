const { readProviderData } = require("../db/readOperation");

const get = async (req, res) => {
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
};

module.exports = { get };
