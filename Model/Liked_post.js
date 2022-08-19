const mongoose = require("mongoose");
const LikePostTable = mongoose.Schema({
    post_id: {
        type: String,
        required: true,
    },
    post_by_user_id: {
        type: String,
        required: true,
    },
    liked_post_id: {
        type: String,
        required: true,
    },
    decs: {
        type: String,
        required: true,
    },
    post_name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    Liked_at: {
        type: String,
        required: true,
    },
    liked_by: {
        type: String,
        required: true,
    },
})

let LikedPost = mongoose.model("LikedPostTable", LikePostTable);
module.exports = LikedPost;