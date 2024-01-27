const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const scheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

scheme.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  } else {
    try {
      const saltRound = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(user.password, saltRound);
      user.password = hashPassword;
    } catch (error) {
      next(error);
    }
  }
});

scheme.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        user_Id: this._id.toString(),
        name: this.name,
        email: this.email,
        phone: this.phone,
      },
      "hsaygfhxcnwy",
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoose.model("Register", scheme);
