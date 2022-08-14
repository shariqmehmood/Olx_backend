// const Exampledatascheema = require("../Model/exapmledata")

// module.exports = {

//     Exampledata: async (req, res) => {
//         try {

//             const { body } = req
//             console.log(body)
//             let obj = new Exampledatascheema({
//                 Name: "shariq",
//                 Email: "email@gmail.com"
//             })
//             obj.save().then(() => {
//                 return res.send({
//                     status: 201,
//                     sucess: true,
//                     msg: "data added success",
//                 })
//             }).catch((e) => {
//                 return res.send({
//                     sucess: false,
//                     msg: "something went wrong",
//                 })
//             })


//         } catch (error) {
//             return res.send({
//                 status: 500,
//                 sucess: false,
//                 msg: "Server Error",
//             })
//         }
//     }
// }