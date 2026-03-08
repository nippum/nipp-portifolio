const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.urlencoded({extended:true}));

app.post("/send", async (req,res)=>{
    
})