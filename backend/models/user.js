const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  companyName: { type: String },
  eamil: {type: Array},
  password: {type: String},
  address: {type: String},
  phone_number: {type: String},
});

// Export model
const User = mongoose.model("User", UserSchema);

module.exports = User;