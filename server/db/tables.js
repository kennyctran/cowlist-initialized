module.exports.table  = `CREATE TABLE IF NOT EXISTS cows (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL UNIQUE,
  description TEXT(255))`;
