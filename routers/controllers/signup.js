const usersModel = require("./../../db/models/usersSchema");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await usersModel.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (userExists) {
    res.json({
      message: "Email or Username already taken!",
    });
  } else {
    const user = await new usersModel({
      username,
      email,
      password,
    });
    await user.save();
    res.status(200).json({ message: "Signup success!" });
  }
};

module.exports = signup;
