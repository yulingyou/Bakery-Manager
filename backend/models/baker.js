const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BakerSchema = new Schema({
  order: {type: Array},
});

// Export model
const Baker = mongoose.model("Baker", BakerSchema);

module.exports = Baker;
