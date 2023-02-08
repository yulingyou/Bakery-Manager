const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BatchOrderSchema = new Schema({
  itemName: { type: String },
  batchQuantity: { type: Number},
  pricePerBatch: {type: Number},
});

// Export model
const BatchOrder = mongoose.model("BatchOrder", BatchOrderSchema);

module.exports = BatchOrder;