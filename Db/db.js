const mongoose = require("mongoose");
const url =
  "mongodb+srv://moftech69:u00NJKXOTuCNyTnE@osama.vzwvzes.mongodb.net/osama?retryWrites=true&w=majority";
const mongodb = async () => {
  try {
    await mongoose.connect(url, {});
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongodb;
