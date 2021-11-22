const express = require("express");

const {
  getUsers,
  getUser,
  resetPassword,
  changeAbout,
  changeAvatar,
  followUser,
  unFollowUser,
  addLikeToUser,
  deleteLikeFromUser,
} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.put("/resetPassword/:id", resetPassword);
usersRouter.put("/changeAbout/:id", changeAbout);
usersRouter.put("/changeAvatar/:id", changeAvatar);
usersRouter.put("/followUser", followUser);
usersRouter.put("/unFollowUser", unFollowUser);
usersRouter.post("/addLike", addLikeToUser);
usersRouter.post("/deleteLike", deleteLikeFromUser);
usersRouter.get("/:id", getUser);

module.exports = usersRouter;
