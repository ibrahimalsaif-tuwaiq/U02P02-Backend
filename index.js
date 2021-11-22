const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/db.js");

// instantiate the app
const app = express();

// load environment variables
dotenv.config();

// app level middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routers

// Login Router
const loginRouter = require("./routers/routes/login");
app.use("/login", loginRouter);

// Signup Router
const signupRouter = require("./routers/routes/signup");
app.use("/signup", signupRouter);

// Posts Router
const postsRouter = require("./routers/routes/posts");
app.use("/posts", postsRouter);

// Home Router
// const homeRouter = require("./routers/routes/home");
// app.use("/", homeRouter);

// Users Router
const usersRouter = require("./routers/routes/users");
app.use("/users", usersRouter);

// PORT variable
const PORT = process.env.PORT;

// listen to app
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
