const mongoose = require("mongoose");
const {ObjectId} = require('mongodb')
const Schema = mongoose.Schema;
const Item = require('../models/item')

const OrderSchema = new Schema({
  userId: String,
  company: { type: String },
  orders: [{type: ObjectId, ref: "BatchOrder"}],
  date_of_order: {type: String},
  date_required: {type: String},
});

// Export model
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

