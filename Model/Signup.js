const mongoose = require("mongoose");
const SignupTable = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
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
    updated_at: {
        type: String,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        required: true,
    },
    is_admin: {
        type: Boolean,
        required: false,
    },
})

let SignupTableData = mongoose.model("SignupTable", SignupTable);
module.exports = SignupTableData;