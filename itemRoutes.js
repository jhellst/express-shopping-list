
const express = require("express");
const router = new express.Router();
const { NotFoundError } = require("./expressError");

const { items } = require("./fakeDb");


/** Show list of all items. */
router.get("/", function(req, res) {
  return res.json({items});
});

/**Add an item to the list. */
router.post("/", function(req, res) {

  const name = req.body.name;
  const price = req.body.price;
  const newItem = {"name": name, "price": price};

  items.push(newItem);

  return res.json({"added": newItem});
});

/** Get an individual item. */
router.get("/:name", function(req, res) {

  const name = req.params.name;
  for (let item of items) {
    if (item.name === name) {
    return res.json(item);
    }
  }

    throw new NotFoundError("Item not found");

  // If it doesn't exist.
});


/**Update an item's information. */
router.patch("/:name", function(req, res) {


  const updatedName = req.body.name;
  const updatedPrice = req.body.price

  const name = req.params.name;
  for (let item of items) {
    if (item.name === name) {
      item.name = updatedName;
      item.price = updatedPrice;
    return res.json(item);
    }
  }

    throw new NotFoundError("Item not found");


});

/** Delete an item from the items list. */
router.delete("/:name", function(req, res){
  const name = req.params.name;
  console.log("NAME IS: ", name);
  for (let item of items) {
    if (item.name === name) {
      //TODO: use filter or slice after finding index

      items.pop(item);
      return res.json({message: "Deleted"});
    }
  }

    throw new NotFoundError("Item not found");
})


module.exports = router;