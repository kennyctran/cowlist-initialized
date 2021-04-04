
module.exports = function logger(req, res, next) {

  console.log(`Now serving ${req.method} request on url ${req.url}`)
  next();

}