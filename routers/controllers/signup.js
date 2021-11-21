const usersModel = require("./../../db/models/usersSchema");

const signup = async (req, res) => {
  const { username, email, password, about } = req.body;

  const userExists = await usersModel.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (userExists) {
    return res.status(403).json({
      error: "Email or Username already taken!",
    });
  } else {
    const user = await new usersModel({
      username,
      email,
      password,
      about,
    });
    await user.save();
    res.status(200).json({ message: "Signup success! Please Login. " });
  }
};

module.exports = signup;
