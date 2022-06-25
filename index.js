const express = require("express");
const app = express();
const route = express.Router();
const morgan = require("morgan");
const { userRouter } = require("./users/users.route");
const port = 8000;

//parsing data to json
app.use(express.json());

//using morgan as a logger
app.use(morgan("tiny"));

//home / index page
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

//navigate to users page
app.use(userRouter);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
