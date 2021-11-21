const express = require("express");

const posts = require("../controllers/login");

const postsRouter = express.Router();

postsRouter.post("/", posts);

module.exports = postsRouter;