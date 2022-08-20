const express = require("express");
let routes = express.Router();
const { SignupController } = require("../Controller/Signup_Controller")
const { LoginController } = require("../Controller/Login_Controller")
const { AddPostController } = require("../Controller/Add_post_controller")
const { AllPostController } = require("../Controller/All_Post_Controller")
const { LikePostController } = require("../Controller/Liked_post_controller")
const { GetUserProfile } = require('../Controller/Get_user_profile_controller')
const { GetLikePost } = require("../Controller/get_like_post_controller")
const { updateUser } = require("../Controller/update_user_controller")

// post Apis//
routes.post("/user/registration", SignupController);
routes.post("/posts/add_post", AddPostController);
routes.post("/user/login", LoginController);
routes.post("/posts/liked_post", LikePostController);


// get Apis//
routes.get("/posts/all_post", AllPostController);
routes.get("/user/get_user/:id", GetUserProfile);
routes.get("/posts/like_post_by_user/:id", GetLikePost);

// update Apis//
routes.get("/user/profile/:id", updateUser);



module.exports = routes;