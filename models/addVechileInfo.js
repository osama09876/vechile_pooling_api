const mongoose = require("mongoose");

const addVechile = mongoose.Schema({
  brand: {
    type: String,
    //     required: true,
  },
  year: {
    type: Number,
    //     required: true,
  },
  model: {
    type: String,
    //     required: true,
  },
  regNo: {
    type: String,
    //     required: true,
  },
  vechileType: {
    type: String,
    //     required: true,
  },
});

module.exports = mongoose.model("addVechile", addVechile);
