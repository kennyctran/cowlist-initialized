const db = require("../db");

module.exports = {
  getAll: () => {
    return db
      .queryAsync(`SELECT * from cows;`)
      .then((data) => data[0])
      .catch((err) => {
        console.log("Unable to fetch cows from database");
        return err;
      });
  },

  create: ({ name, description }) => {
    return db
      .queryAsync(
        `INSERT INTO cows (name, description) VALUES ('${name}', '${description}')`
      )
      .then(() => "Cow successfully created")
      .catch((err) => {
        console.log(err);
        return "Could not create your cow :(";
      });
  },

  delete: (id) => {
    return db.queryAsync(`DELETE FROM cows WHERE id = ${id};`).then((res) => {
      if (res[0].affectedRows < 1) {
        throw Error("Error deleting cow");
      } else {
        return "Cow successfully deleted";
      }
    });
  },
};
