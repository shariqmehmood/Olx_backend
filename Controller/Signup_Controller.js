const SignupTableData = require("../Model/Signup_Model")
const cloudinary = require("cloudinary").v2
const { v4: uuidv4 } = require('uuid')
cloudinary.config({
    cloud_name: "nocodeai",
    api_key: "339174152542682",
    api_secret: "JKBd50yx0mZSaWr0fm2VjgZKfA4"
});


module.exports = {
    SignupController: async (req, res) => {
        try {
            const today = new Date();
            const { body } = req
            const Email = req.body.email;
            const Name = req.body.name;
            const UserName = req.body.userName
            const Password = req.body.password

            const id = uuidv4()
            // const file = req.files.photo;
            // console.log(Email)
            // console.log(Name)

            // console.log("file.tempFilePath", file.tempFilePath)
            const CheckUserRegistered = await SignupTableData.findOne({ email: Email })
            if (CheckUserRegistered) {
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "User Already Registered ",
                })
            }




            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {


                let SignupDataObj = new SignupTableData({
                    user_id: id,
                    name: Name,
                    email: Email,
                    userName: UserName,
                    password: Password,
                    url: result.url,
                    created_at: today,
                    updated_at: today,
                    is_deleted: false,
                    is_admin: true,
                })
                SignupDataObj.save().then(() => {
                    return res.send({
                        status: 201,
                        sucess: true,
                        msg: " Your Registration Successfully",
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