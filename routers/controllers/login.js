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
      res.status(403).json({
        error: "Password is incorrect",
      });
    }
  } else {
    res.status(403).json({
      error: "User Doesn't Exist!!",
    });
  }
};

module.exports = login;
