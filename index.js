//chunk 1

const express = require("express");
const sendMail = require("./public/js/mail.js");
const log = console.log;
const app = express();
const path = require("path");

//chunk2
//data parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.post("/email",(req,res)=>{
    
    const {subject,email,text} = req.body;
    console.log("Data: ", req.body);
    sendMail(email,subject,text,function(err,data){
        if(err){
            res.status(500),json({message: "Internal Error"});
        }else{
            res.json({message: "Email sent!!"});
        }
    });
    
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html")); 
})

//static files
app.use(express.static(path.join(__dirname,"public")));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

console.log(path.join(__dirname,"public","index.html"));
