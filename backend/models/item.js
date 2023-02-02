const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  item_name: { type: String },
  cost_to_bake: { type: Number},
  price: { type: Number},
  image: { type: String},
  ingredients: {type: Array},
  batch_quantity: { type: Number},
});

// Export model
const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;

