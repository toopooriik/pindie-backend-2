const allowedCors = ["https://front-toporik.nomoredomainswork.ru"];

function cors(req, res, next) {
  const { origin } = req.headers;

  res.header("Access-Control-Allow-Origin", "https://front-toporik.nomoredomainswork.ru");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
}

module.exports = cors;