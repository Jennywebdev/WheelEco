const models = require("../models");

const add = async (req, res) => {
  try {
    await models.entreprise.insert(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  add,
};
