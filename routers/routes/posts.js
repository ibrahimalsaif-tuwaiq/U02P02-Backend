const express = require("express");

const {
  getPosts,
  addPost,
  addCommentToPost,
  addLikeToPost,
  deleteLikeFromPost,
  getUserPosts,
  getUserFollowingPosts,
  getUserLikedPosts,
  getPost,
  deletePost,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", addPost);
postsRouter.post("/addComment", addCommentToPost);
postsRouter.put("/addLike", addLikeToPost);
postsRouter.put("/deleteLike", deleteLikeFromPost);
postsRouter.get("/user/:id", getUserPosts);
postsRouter.put("/followingPosts/:id", getUserFollowingPosts);
postsRouter.get("/likes/:id", getUserLikedPosts);
postsRouter.get("/:id", getPost);
postsRouter.put("/:id", deletePost);

module.exports = postsRouter;
