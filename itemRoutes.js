
const express = require("express");
const app = require("./app");
const router = new express.Router();

const { items } = require("./fakeDb");



router.get("/", function(req, res) {
  return res.json({"items": {items}});
});

router.post("/", function(req, res) {

  const name = req.body.name;
  const price = req.body.price;
  const newItem = {"name": name, "price": price};

  items.push({name: newItem});

  return res.json({"added": newItem});
});

router.get("/:name", function(req, res) {

  const name = res.params.name;
  if (items.name) {
    return res.json(items[name]);
  }

  // If it doesn't exist.
});


router.patch("/:name", function(req, res) {

  const name = req.params.name;
  const updatedEntry = req.body;
  console.log("Updated Entry", updatedEntry);

  if (items.name) {

    items[name] = {updatedEntry};

    return res.json(items[name]);
  }

  // If it doesn't exist.
});


module.exports = router;