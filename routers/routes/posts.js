const express = require("express");

const {
  getPosts,
  addPost,
  addCommentToPost,
  addLikeToPost,
  deleteLikeFromPost,
  getUserPosts,
  getUserLikedPosts,
  getPost,
  deletePost,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", addPost);
postsRouter.post("/addComment", addCommentToPost);
postsRouter.post("/addLike", addLikeToPost);
postsRouter.post("/deleteLike", deleteLikeFromPost);
postsRouter.get("/user/:id", getUserPosts);
postsRouter.get("/likes/:id", getUserLikedPosts);
postsRouter.get("/:id", getPost);
postsRouter.put("/:id", deletePost);

module.exports = postsRouter;
