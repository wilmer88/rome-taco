const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/user", (req, res) => {
  db.User.find({})
    .then((foundusers) => {
      res.json(foundusers);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "failed to retrieve all client collection info",
      });
    });
});
router.get("/api/user/:id", (req, res) => {
  db.User.findById(req.params.id)
   
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `failed to retrieve specified user data id of ${req.params.id}`,
      });
    });
});
router.post("/api/user", (req, res) => {
  db.User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "failed to create user",
      });
    });
});
router.put("/api/user/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUserData) => {
      res.json(updatedUserData);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "failed to update specified user data",
      });
    });
});
router.delete("/api/user/:id", (req, res) => {
  db.User.findByIdAndDelete(req.params.id)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "failed to delete user",
      });
    });
});

module.exports = router;
