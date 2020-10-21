const { readProviderData, readProvidersData } = require("../db/readOperation");
const { deleteProvider } = require("../db/deleteOperation");
const { validationResult } = require("express-validator");
const { createProvider } = require("../db/createOperation");
const { updateProvider } = require("../db/updateOperation")


//////////////////////////////////////////////
// Return all providers in json format
const getAll = async (req, res) => {
  try {
    const data = await readProvidersData();
    res.setHeader("Content-Type", "application/json");
    if (!data) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Providers not found" }));
    } else {
      return res.status(200).send(JSON.stringify(data));
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};



//////////////////////////////////////////////
// Return provider by ID in json format
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



//////////////////////////////////////////////
// Delete provider by ID
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



//////////////////////////////////////////////
// Create provider
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



//////////////////////////////////////////////
// Update provider by ID
const update = async (req, res) => {
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
      return res.status(400).send(JSON.stringify({ message: errors[0].msg }));
    }

    const providerModel = await updateProvider(req.params.id, provider);

    if (providerModel) {
      return res.status(200).send({ message: "Provider updated" });
    } else {
      return res.status(400).send({ message: "Unable update provider" });
    }
  } catch (e) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { get, remove, create, update, getAll };
