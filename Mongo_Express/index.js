const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Chat= require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


main()
.then(()=>{
    console.log("connection succesful");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

app.get("/",(req,res)=>{
    res.send("hi");
})

//Index Route
app.get("/chats", async(req,res)=>{
    let chats= await Chat.find();  // Coming data from database to server
    // console.log(chats);
    res.render("index.ejs",{chats});
})

//New route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//Create route
app.post("/chats",(req,res)=>{
    let{from,to,msg}=req.body;
    let newChat= new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
    });

    newChat.save()
    .then((res)=>{
        console.log("chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    })

    res.redirect("/chats");
    
});

//Edit Route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params; // To edit the chat  we have to take id
    let chat=  await Chat.findById(id);  // search id from the database
    res.render("edit.ejs",{chat});
})


//Update Route
app.put("/chats/:id", async (req,res)=>{
    let { id }=req.params; 
    let { msg: newMsg } = req.body;
    let updatedchat= await Chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true ,new:true});
        console.log(updatedchat);
        res.redirect("/chats");
})


//Destroy route
app.delete("/chats/:id",async(req,res)=>{
    let { id }=req.params; 
    let delChat=  await Chat.findByIdAndDelete(id)
    console.log(delChat);
    res.redirect("/chats");
})

app.listen("8080",()=>{
    console.log("app is listening");
})