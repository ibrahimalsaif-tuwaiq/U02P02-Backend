const usersModel = require("./../../db/models/usersSchema");

const getUsers = (req, res) => {
  usersModel
    .find({})
    .populate("likes")
    .populate("followers")
    .populate("following")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  usersModel
    .findById(id)
    .populate("likes")
    .populate("followers")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const resetPassword = (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body.password);

  usersModel
    .findByIdAndUpdate(id, { password: req.body.password }, { new: true })
    .populate("likes")
    .populate("followers")
    .populate("following")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const changeAbout = (req, res) => {
  const { id } = req.params;

  usersModel
    .findByIdAndUpdate(id, { about: req.body.about }, { new: true })
    .populate("likes")
    .populate("followers")
    .populate("following")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const changeAvatar = (req, res) => {
  const { id } = req.params;

  usersModel
    .findByIdAndUpdate(id, { avatar: req.body.avatar }, { new: true })
    .populate("likes")
    .populate("followers")
    .populate("following")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const followUser = (req, res) => {
  try {
    usersModel.findByIdAndUpdate(
      req.body.userId,
      {
        $push: { following: req.body.otherUserId },
      },
      () => {
        console.log("User has been followed");
      }
    );
    usersModel.findByIdAndUpdate(
      req.body.otherUserId,
      {
        $push: { followers: req.body.userId },
      },
      () => {
        console.log("User has been added to followers");
      }
    );
    res.status(200).json({ message: "User followed successfully" });
  } catch (error) {
    res.json({ error });
  }
};

const unFollowUser = (req, res) => {
  try {
    usersModel.findByIdAndUpdate(
      req.body.userId,
      {
        $pull: { following: req.body.otherUserId },
      },
      () => {
        console.log("User has been unfollowed");
      }
    );
    usersModel.findByIdAndUpdate(
      req.body.otherUserId,
      {
        $pull: { followers: req.body.userId },
      },
      () => {
        console.log("User has been removed from followers");
      }
    );
    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  getUsers,
  getUser,
  resetPassword,
  changeAbout,
  changeAvatar,
  followUser,
  unFollowUser,
};
