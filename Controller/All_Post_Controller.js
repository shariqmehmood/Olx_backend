const SignupTableData = require("../Model/Signup")
const AddPostTableData = require("../Model/Add_Post")

module.exports = {
    AllPostController: async (req, res) => {
        console.log("hello wrold")
        AddPostTableData.find({})
            .then(result => {
                console.log(result, "===>All Post")
                return res.send({
                    status: 201,
                    sucess: true,
                    msg: "data recived",
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
                return res.send({
                    status: 500,
                    sucess: false,
                    error:err,
                    msg: "some thing went wrong",
                })
            })
    }


}