const model = require("../models/register.js");
const addRideModel = require("../models/addridde.js");
const addVechile = require("../models/addVechileInfo.js");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const userExist = await model.findOne({ email: email });
    if (userExist) {
      res.json({ msg: "User already exist" });
    } else {
      const userCreated = await model.create({
        name,
        email,
        phone,
        password,
      });
      res.json({
        msg: "Registered successfully",
        token: await userCreated.generateToken(),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await model.findOne({ email: email });
    if (!userExist) {
      await res.json({ error: "Invalid credentials" });
    } else {
      const user = await bcrypt.compare(password, userExist.password);
      if (user) {
        res.json({
          msg: "Login successfully",
          token: await userExist.generateToken(),
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const addRide = async (req, res) => {
  try {
    const {
      name,
      vechileName,
      pickUp,
      dropOf,
      phoneNo,
      vechileTpye,
      isOnline,
    } = req.body;
    const vechileExist = await addRideModel.findOne({ name: name });
    if (vechileExist) {
      res.json({ msg: "Ride already exist" });
    } else {
      await addRideModel.create({
        name,
        vechileName,
        pickUp,
        dropOf,
        phoneNo,
        vechileTpye,
        isOnline,
      });
      res.json({
        msg: " Successfully add ride info",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const addRideInfo = async (req, res) => {
  try {
    const { brand, year, model, regNo, vechileType } = req.body;
    const vechileExist = await addVechile.findOne({ regNo: regNo });
    if (vechileExist) {
      res.json({ msg: "Registeration number already exist" });
    } else {
      await addVechile.create({
        brand,
        year,
        model,
        regNo,
        vechileType,
      });
      res.json({
        msg: " Successfully add vechile",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getRides = async (req, res) => {
  try {
    const getRideData = await addRideModel.find();
    //     console.log(getRideData);
    res.json(getRideData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  addRide,
  addRideInfo,
  getRides,
};
