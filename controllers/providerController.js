const { readProviderData } = require("../db/readOperation");
const { deleteProvider } = require("../db/deleteOperation");
const { validationResult } = require("express-validator");
const { createProvider } = require("../db/createOperation");

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

const remove = async (req, res) => {
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
};

const create = async (req, res) => {
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
};

module.exports = { get, remove, create };
