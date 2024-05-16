function cors(req, res, next) {
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  
    next(); 
}
module.exports = cors;