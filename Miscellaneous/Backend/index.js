const express=require("express");
const app= express();

const port=8080;

app.use(express.urlencoded({extended:true}));  //Middleware
app.use(express.json());        //Middleware


app.get("/register",(req,res)=>{
    let {user,password}=req.query
   res.send(`Standard get response Welcome ${user}! `);
})

app.post("/register",(req,res)=>{
    let{user,password}=req.body;
    res.send(`Standard post response Welcome ${user}`);
 })
 

app.listen(port,()=>{
    console.log(`Listening the post ${port} `)
})

