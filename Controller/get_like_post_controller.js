const LikedPost = require("../Model/Liked_post")
module.exports = {
    GetLikePost: async (req, res) => {
        try {
            const { id } = req.params
            const getUserLikePost = await LikedPost.find({ liked_by: id })

            if (!getUserLikePost) {
                return res.send({
                    status: 404,
                    sucess: false,
                    msg: "Like not Found",
                })
            }
            // else if(getUserLikePost.data.l){
            // }
            else if (getUserLikePost) {
                return res.send({
                    status: 200,
                    sucess: true,
                    msg: "Like Post Found",
                    data: getUserLikePost
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