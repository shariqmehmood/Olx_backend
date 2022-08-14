const express = require("express");
let routes = express.Router();
const { SignupController } = require("../Controller/Signup_Controller")


// post Apis//
routes.post("/user/registration", SignupController);

// get Apis//
// routes.get("/getdata", getdata);
module.exports = routes;