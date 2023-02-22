const models = require("../models");

const findCarsByEntreprise = async (req, res) => {
  models.cars
    .findByCarsWithEntrepriseId()
    .then(([rows]) => {
      return res.status(201).send(rows);
    })
    .catch((error) => {
      console.error(error);
      return res.sendStatus(500);
    });
};

const add = (req, res) => {
  models.cars
    .insert(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      return res.sendStatus(500);
    });
};
module.exports = {
  findCarsByEntreprise,
  add,
};
