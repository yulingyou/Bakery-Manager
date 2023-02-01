const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Item = require('../models/item')

const OrderSchema = new Schema({
  company: { type: String },
  order: {type: Array},
  date_of_order: {type: String},
  date_required: {type: String},
});

// Export model
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

