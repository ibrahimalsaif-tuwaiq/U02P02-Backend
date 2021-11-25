const usersModel = require("./../../db/models/usersSchema");

const login = async (req, res) => {
  const { identifier, password } = req.body;

  const userExists = await usersModel.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });
  if (userExists) {
    if (userExists.password == password) {
      res.status(200).json(userExists);
    } else {
      res.json("Password is incorrect");
    }
  } else {
    res.json("User Doesn't Exist!!");
  }
};

module.exports = login;
