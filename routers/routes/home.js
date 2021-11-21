const express = require("express");

const home = require("../controllers/login");

const homeRouter = express.Router();

homeRouter.post("/", home);

module.exports = homeRouter;