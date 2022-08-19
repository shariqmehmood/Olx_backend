const SignupTableData = require("../Model/Signup")
const AddPostTableData = require("../Model/Add_Post")
const cloudinary = require("cloudinary").v2
const { v4: uuidv4 } = require('uuid')
cloudinary.config({
    cloud_name: "nocodeai",
    api_key: "339174152542682",
    api_secret: "JKBd50yx0mZSaWr0fm2VjgZKfA4"
});

module.exports = {
    AddPostController: async (req, res) => {
        try {
            const id = uuidv4()
            const { body } = req
            const today = new Date();
            const post_name = req.body.post_name
            const price = req.body.price
            const decs = req.body.decs
            const user_id = req.body.user_id
            const file = req.files.photo;
            console.log('body ', body)
            const CheckUserRegistered = await SignupTableData.findOne({ user_id: user_id })
            if (!CheckUserRegistered) {
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "User not found",
                })
            }
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                console.log(result)
                let AddPostTableDataObj = new AddPostTableData({
                    post_by_user_id: user_id,
                    url: result.url,
                    is_deleted: false,
                    post_name: post_name,
                    price: price,
                    decs: decs,
                    post_id: id,
                    created_at: today,
                    userName: CheckUserRegistered?.userName
                })
                AddPostTableDataObj.save().then(() => {
                    return res.send({
                        status: 201,
                        sucess: true,
                        body: body,
                        msg: " Post Added Successfully",
                    })
                }).catch((e) => {
                    return res.send({
                        sucess: false,
                        msg: "something went wrong",
                    })
                })

            })


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