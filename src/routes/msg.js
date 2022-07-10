const express = require("express");
const msgSchema = require("../models/msg");

const router = express.Router();

// create msg
router.post("/msgs", (req, res) => {
  const msg = msgSchema(req.body);
  msg
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all msgs
router.get("/msgs", (req, res) => {
  msgSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a msg
router.get("/msgs/:id", (req, res) => {
  const { id } = req.params;
  msgSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a msg
router.delete("/msgs/:id", (req, res) => {
  const { id } = req.params;
  msgSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a msg
router.put("/msgs/:id", (req, res) => {
  const { id } = req.params;
  const { dm } = req.body;
  msgSchema
    .updateOne({ _id: id }, { $set: { dm } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;