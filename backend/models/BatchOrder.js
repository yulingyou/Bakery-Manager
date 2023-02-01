const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BatchOrderSchema = new Schema({
  item: { type: String },
  batch_quantity: { type: Number},
//   price_per_batch: {type: Number},
});

// Export model
const BatchOrder = mongoose.model("BatchOrder", BatchOrderSchema);

module.exports = BatchOrder;