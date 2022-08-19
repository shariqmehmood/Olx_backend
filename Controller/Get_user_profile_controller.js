const SignupTableData = require("../Model/Signup")
module.exports = {
    GetUserProfile: async (req, res) => {
        try {
            const { id } = req.params
            const getUserProfile = await SignupTableData.findOne({ user_id: id })
            if (!getUserProfile) {
                return res.send({
                    status: 404,
                    sucess: false,
                    msg: "User not Found",
                })
            }
            else if (getUserProfile) {
                return res.send({
                    status: 200,
                    sucess: true,
                    msg: "User Profile is found",
                    data: getUserProfile
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