const AddPostTableData = require("../Model/Add_Post")
const SignupTableData = require("../Model/Signup")
const LikedPost = require('../Model/Liked_post')
const { v4: uuidv4 } = require('uuid')
module.exports = {
    LikePostController: async (req, res) => {
        try {
            const { body } = req
            const id = uuidv4()
            const today = new Date();
            console.log('body ', body)
            const postID = req?.body?.post_id
            console.log("-----", postID)
            const post_by_user_id = req.body.post_by_user_id
            const user_id = req.body.liked_by
            const CheckPost = await AddPostTableData.findOne({ post_id: postID })
            if (!CheckPost) {
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "post not found",
                })
            }
            const url = CheckPost.url
            const post_name = CheckPost.post_name
            const price = CheckPost.price
            const decs = CheckPost.decs

            const checkuser = await SignupTableData.findOne({ user_id: user_id })
            if (!checkuser) {
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "user not found",
                })
            }
            else if (checkuser.is_admin === true) {
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "You are admin you no need of like post ",
                })
            }

            const checkpostislike = await LikedPost.find({ liked_by: user_id, post_id: postID })
            console.log(checkpostislike.length)
            if (checkpostislike.length) {
                console.log("Already Liked")
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "post is alraedy liked"
                })
            }
            else {
                let obj = new LikedPost({
                    liked_post_id: id,
                    Liked_at: today,
                    post_by_user_id: post_by_user_id,
                    post_id: postID,
                    liked_by: user_id,
                    url: url,
                    post_name: post_name,
                    price: price,
                    decs: decs

                })
                obj.save().then(() => {
                    return res.send({
                        status: 201,
                        sucess: true,
                        msg: "Post Liked"
                    })
                }).catch((e) => {
                    return res.send({
                        sucess: false,
                        error: e,
                        msg: "something went wrong",
                    })
                })

            }
        }
        catch (err) {
            console.log(err)
            return res.send({
                status: 400,
                sucess: false,
                msg: "server err",
            })

        }
    }



}