const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  itemName: { type: String },
  costToBake: { type: Number},
  price: { type: Number},
  image: { type: String},
  ingredients: {type: Array},
  batchQuantity: { type: Number},
});

// Export model
const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;

