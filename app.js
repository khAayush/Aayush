const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("/Project 69/views/index.ejs");
});

app.get("/projects",(req,res)=>{
    res.render("/Project 69/views/projects.ejs");
});

app.listen(8080, function(){
    console.log("Jaa browser ma herr");
});