const mongoose = require("mongoose");

const addRide = mongoose.Schema({
  name: {
    type: String,
    //     required: true,
  },
  vechileName: {
    type: String,
    //     required: true,
  },
  pickUp: {
    type: String,
    //     required: true,
  },
  dropOf: {
    type: String,
    //     required: true,
  },
  phoneNo: {
    type: Number,
  },
  vechileTpye: {
    type: String,
    //     required: true,
  },
  isOnline: {
    type: Boolean,
  },
});

module.exports = mongoose.model("addride", addRide);
