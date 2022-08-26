const SignupTableData = require("../Model/Signup")
const cloudinary = require("cloudinary").v2
const bcrypt = require("bcryptjs")
const { v4: uuidv4 } = require('uuid')
cloudinary.config({
    cloud_name: "nocodeai",
    api_key: "339174152542682",
    api_secret: "JKBd50yx0mZSaWr0fm2VjgZKfA4"
});

module.exports = {
    SignupController: async (req, res) => {
        try {
            const { body } = req
            const today = new Date();
            console.log(body, '======>', req.file, "+++++++++++++++++++++")
            const Email = req.body.email;
            console.log(Email, "Email")
            const Name = req.body.name;
            const UserName = req.body.userName
            const file = req?.body?.file
            const salt = await bcrypt.genSalt(10);
            const Hashpasword = await bcrypt.hash(req.body.password, salt);

            const id = uuidv4()
            console.log('body ', body)
            const CheckUserRegistered = await SignupTableData.findOne({ email: Email })
            if (CheckUserRegistered) {
                return res.send({
                    status: 409,
                    sucess: false,
                    msg: "User Already Registered",
                })
            }
            console.log(file, "file")
            cloudinary.uploader.upload(file?.path, (err, result) => {
                // cloudinary.uploader.upload(file?.data, (err, result) => {
                console.log(err)
                if (err) {
                    return res.send({
                        status: 500,
                        success: false,
                        message: 'server error'
                    })
                }
                console.log(result)
                let SignupDataObj = new SignupTableData({
                    user_id: id,
                    name: Name,
                    email: Email,
                    userName: UserName,
                    password: Hashpasword,
                    url: result?.url,
                    created_at: today,
                    updated_at: today,
                    is_deleted: false,
                    is_admin: false,
                })
                SignupDataObj.save().then(() => {
                    return res.send({
                        status: 201,
                        sucess: true,
                        body,
                        msg: " Your Registration Successfully",
                    })
                }).catch((e) => {
                    return res.send({
                        sucess: false,
                        error: e,
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