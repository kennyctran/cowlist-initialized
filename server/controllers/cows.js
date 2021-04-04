const  { cows } = require('../models')

module.exports = {

  getAll: () => {
    return cows.getAll()
      .then((cowData) => cowData)
      .catch((err) => err)
  },
  post: (cowDetails) => {
    return cows.create(cowDetails)
      .then((msg) => msg)
      .catch((msg) => msg);
  },
  delete: (id) => {
    return cows.delete(id)
      .then((msg) => msg)
      .catch((err) => {
        throw Error(err);
      });
  }
}