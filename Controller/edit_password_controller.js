const SignupTableData = require("../Model/Signup")
const bcrypt = require("bcryptjs")

module.exports = {
    Editpassword: async (req, res) => {
        let { body } = req
        const email = req?.body?.email
        const salt = await bcrypt.genSalt(10);
        const Hashpasword = await bcrypt.hash(req.body.password, salt);
        console.log(Hashpasword)

        let finduser = await SignupTableData.findOneAndUpdate({ email: email }, { password: Hashpasword, })
            .then((data) => {
                if (!data) {
                    return res.send({
                        status: 404,
                        sucess: false,
                        msg: "some thing went wrong",
                    })
                }
                else {
                    return res.send({
                        status: 201,
                        sucess: true,
                        msg: "password updated sucessfully",
                        data: data
                    })
                }
            })
            .catch(err => {
                console.log(err);
                return res.send({
                    status: 500,
                    sucess: false,
                    error: err,
                    msg: "some thing went wrong",
                })
            })
    }


}