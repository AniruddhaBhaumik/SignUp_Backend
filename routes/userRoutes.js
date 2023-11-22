const express = require("express");
const userSchema = require("../schema/userSchema");
const route = express.Router();

route.post("/create-user", (req, res, next) => {
  userSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

route.get("/", (req, res, next) => {
  userSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

route.post("/login", (req, res, next) => {
  const { name, email, password } = req.body;
  userSchema.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login successfull");
      } else {
        res.json("Password errors");
      }
    } else {
      res.json("No records found");
    }
  });
});

module.exports = route;
