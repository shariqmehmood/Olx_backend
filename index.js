const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload")

let app = express();
const routes = require('./Routes/routes')


app.use(express.json());
mongoose.connect("mongodb+srv://olx:olx@cluster0.t2oaq.mongodb.net/Olx?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log(' <-----Database Connected----->');
});
mongoose.connection.on('error', () => {
    console.log("<---data base not Connect--->")
});
app.use(cors());

app.use(fileUpload({
    useTempFiles: true
}))
app.use('/api', routes)





let PORT = process.env.PORT || 4000;
app.use(express.static("public"));
app.use("/public", express.static("public"));
app.listen(PORT, () => {
    console.log("run Port on 4000")
});