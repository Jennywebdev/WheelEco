CREATE TABLE IF NOT EXISTS cars (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  marque VARCHAR(25) NOT NULL,
  models VARCHAR(25) NOT NULL,
  carYears INT NOT NULL,
  fuelType VARCHAR(20) NOT NULL,
  price INT NOT NULL,
  position VARCHAR(255) NOT NULL,
  vehiculeRegistration VARCHAR(30) NOT NULL,
  kilometerToNextOverhaul  INT NOT NULL,
  kilometer INT NOT NULL,
  carPicture TEXT,
  entrepriseCarsId INT NOT NULL,
  isAvailable BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS roles (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS entreprise (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  siret VARCHAR(50) NOT NULL,
  mailSupport VARCHAR(255) NULL,
  entrepriseAdress VARCHAR(255) NOT NULL,
  entreprisePhone VARCHAR(25) NOT NULL,
  entrepriseType ENUM("organisation", "compagnie")
);

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  birthday DATE NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  profilePicture TEXT DEFAULT NULL,
  drivingLicenceRecto TEXT DEFAULT NULL,
  drivingLicenceVerso TEXT DEFAULT NULL,
  adress VARCHAR(255) NOT NULL,
  phone VARCHAR(25),
  isVerified BOOLEAN DEFAULT 0,
  roleId INT NOT NULL DEFAULT 1,
  entrepriseId INT DEFAULT NULL,
  FOREIGN KEY (roleId) REFERENCES roles(id)
  );


CREATE TABLE IF NOT EXISTS userrent (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  startDate DATETIME NOT NULL,
  endDate DATETIME NOT NULL,
  userId INT NOT NULL,
  carId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (carId) REFERENCES cars(id)
);

INSERT INTO roles(name) VALUES ("administrateur"), ("entreprsise"), ("compagnie"), ("gestionaire"), ("particulier");

