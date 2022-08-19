const SignupTableData = require("../Model/Signup")
const bcrypt = require("bcryptjs")
module.exports = {
    LoginController: async (req, res) => {
        try {
            const { body } = req

            console.log("body", body)
            // console.log(req.body.email)
            // console.log(req.body.password)


            const salt = await bcrypt.genSalt(10);
            Hashpasword = await bcrypt.hash(req.body.password, salt);

            let Email = req.body.email;
            // console.log(Email);


            let checkEmail = await SignupTableData.findOne({ email: Email })
            let data = checkEmail
            if (!checkEmail) {
                return res.send({
                    status: 403,
                    sucess: false,
                    msg: "User not found"
                })
            }
            let checkpassword = await bcrypt.compare(req.body.password, checkEmail.password);

            if (!checkpassword) {
                return res.send({
                    status: 404,
                    sucess: false,
                    msg: "incorrect password"
                })
            }

            return res.send({
                status: 200,
                sucess: true,
                msg: "login sucses",
                data: data
            })
        }
        catch (err) {
            return  res.send({
                status: 400,
                sucess: false,
                msg: "server err",
            })

        }
    }
}