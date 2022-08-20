const SignupTableData = require("../Model/Signup")

module.exports = {
    updateUser: async (req, res) => {
        let { body } = req
        console.log("req.body", req.body)
        const user_id = req?.params.id
        console.log("id----", user_id)
        let finduser = await SignupTableData.findOneAndUpdate({ user_id: user_id }, req.body)

            // if (!finduser) {
            //     return res.send({
            //         status: 404,
            //         sucess: false,
            //         msg: "user not found",
            //     })
            // }
            .then((data) => {
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "profile updated sucessfully",
                })
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