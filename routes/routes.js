const express = require("express");
const route = express.Router();
const controller = require("../controllers/controllers.js");

route.post("/register", controller.register);
route.post("/login", controller.login);
route.post("/addRide", controller.addRide);
route.post("/addRideInfo", controller.addRideInfo);
route.get("/getRides", controller.getRides);

module.exports = route;
