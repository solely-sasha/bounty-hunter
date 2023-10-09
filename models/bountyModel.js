const mongoose = require("mongoose");

const bountySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  living: {
    type: Boolean,
  },
  amount: {
    type: Number,
  },
  type: {
    type: String,
  },
});

module.exports = mongoose.model("Bounty", bountySchema);
