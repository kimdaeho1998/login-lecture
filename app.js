//module
const express = require("express");
const app = express();


// routing
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // use -> middle ware 를 등록 해주는 메소드

module.exports = app;
