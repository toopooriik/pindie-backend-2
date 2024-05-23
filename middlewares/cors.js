const allowedCors = ["https://pindie-frontend.nomoredomainswork.ru"];

function cors(req, res, next) {
  const { origin } = req.headers;

    res.header("Access-Control-Allow-Origin", origin, "Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE", "Access-Control-Allow-Headers", 
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
}

module.exports = cors;