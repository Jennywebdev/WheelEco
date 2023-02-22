const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(`insert into ${this.table} SET ?`, [user]);
  }

  update(user) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      user,
      user.id,
    ]);
  }

  findByEmail(email) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE email=?`, [
      email,
    ]);
  }

  findByUserIdAndEntrepriseId(userId, entrepriseId) {
    return this.connection.query(
      `SELECT u.id,
u.firstname,
u.lastname,
u.birthday,
u.email,
u.password,
u.profilePicture,
u.drivingLicenceRecto,
u.drivingLicenceVerso,
u.adress,
u.phone,
u.isVerified,
u.roleId,
u.entrepriseId,
e.name,
e.siret,
e.mailSupport,
e.entrepriseType,
e.entrepriseAdress,
e.entreprisePhone FROM ${this.table} AS u
      INNER JOIN entreprise AS e ON e.id = u.entrepriseId
      WHERE u.id = ? AND u.entrepriseId = ?`,
      [userId, entrepriseId]
    );
  }
}

module.exports = UsersManager;
