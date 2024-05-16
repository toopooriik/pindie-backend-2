const sendAllUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (req, res)=>{
  res.setHeader("Constent-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserById = (req,res)=>{
  set.setHeader("Content-Type", "application/json");
  set.end(JSON.stringify(req.user));
};

module.exports = {sendAllUsers, sendUserCreated, sendUserById}; 
