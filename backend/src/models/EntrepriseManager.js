const AbstractManager = require("./AbstractManager");

class EntrepriseExtends extends AbstractManager {
  constructor() {
    super({ table: "entreprise" });
  }

  insert(currentEntreprise) {
    return this.connection.query(`INSERT INTO entreprise SET ?`, [
      currentEntreprise,
    ]);
  }
}

module.exports = EntrepriseExtends;
