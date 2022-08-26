const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const bodyParser = require('body-parser')

let app = express();
const routes = require('./Routes/routes');

app.use(bodyParser.json())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));
app.use("/public", express.static("public"));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://olx:olx@cluster0.t2oaq.mongodb.net/Olx?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log(' <-----Database Connected----->');
});
mongoose.connection.on('error', () => {
    console.log("<---data base not Connect--->")
});

app.use('/api', routes)





let PORT = process.env.PORT || 4000;
app.use(express.static("public"));
app.use("/public", express.static("public"));
app.listen(PORT, () => {
    console.log("run Port on 4000")
});