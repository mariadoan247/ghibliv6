const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: int,
    required: true
  },
  price: {
    type: double,
    required: true
  },
  ownerEmail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("ghiblirealestates", UserSchema);