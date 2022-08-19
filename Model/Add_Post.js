const mongoose = require("mongoose");
const AddPostTable = mongoose.Schema({
    post_id: {
        type: String,
        required: true,
    },
    post_by_user_id: {
        type: String,
        required: true,
    }, 
    userName: {
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
    created_at: {
        type: String,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        required: true,
    },
})

let AddPostTableData = mongoose.model("PostTable", AddPostTable);
module.exports = AddPostTableData;