const express= require("express");
const app= express();
const env = require("dotenv").config();
const db=require("./config/db");
db();





app.listen(3000,()=>console.log("server is running port 3001"));


module.exports=app;