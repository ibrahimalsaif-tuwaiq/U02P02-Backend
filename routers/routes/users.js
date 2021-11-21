const express = require("express");

const users = require("../controllers/signup");

const usersRouter = express.Router();

usersRouter.post("/", users);

module.exports = usersRouter;