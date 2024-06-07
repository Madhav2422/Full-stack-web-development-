const express=require("express");
const app=express();
const path=require("path");

let port=3000;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})


app.get("/ig/:username",(req,res)=>{

    // const followers=["mad","sahil","sinu","mann"];
    let {username}=req.params;
    const instadata= require("./data.json")
    const data=instadata[username];
    if(data){
        res.render("instagram.ejs",{username,data}); 
    }

    else{
        res.render("error.ejs");
    }
})

app.get("/rolldice",(req,res)=>{

    let diceVal= Math.floor(Math.random() * 6 ) + 1

    res.render("rolldice",{diceVal});
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})