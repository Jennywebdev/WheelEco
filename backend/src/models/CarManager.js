const AbstractManager = require("./AbstractManager");

class CarManager extends AbstractManager {
  constructor() {
    super({ table: "cars" });
  }

  findByCarsWithEntrepriseId() {
    return this.connection.query(`SELECT c.id, c.marque ,
    c.models ,
    c.carYears ,
    c.fuelType ,
    c.price ,
    c.position ,
    c.vehiculeRegistration ,
    c.kilometerToNextOverhaul  ,
    c.kilometer ,
    c.entrepriseCarsId,
    c.isAvailable,
    c.carPicture,
    e.name,
    e.siret,
    e.mailSupport,
    e.entrepriseAdress,
    e.entreprisePhone,
    e.entrepriseType FROM cars AS c
  INNER JOIN entreprise AS e ON e.id = c.entrepriseCarsId;`);
  }

  insert(data) {
    return this.connection.query(`INSERT INTO cars SET ?`, [data]);
  }
}

module.exports = CarManager;
