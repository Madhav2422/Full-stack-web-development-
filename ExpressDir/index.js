const express=require("express");
const app=express();

// console.dir(app);

let port=3000; //8080

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Request received");

// }); 


    app.get("/",(req,res)=>{
        res.send("Hello i am root");
    });

                // Path Parameters

    app.get("/:username/:id",(req,res)=>{
       let{username,id}=req.params;
       let htmlStr=`<h1>Welcome to the page of @${username} </h1>`
        res.send(htmlStr); 
    })

    app.get("/search",(req,res)=>{
       let{q}=req.query;

       if(!q){
        res.send("<h1>Nothing is searhed</h1>")
       }

        res.send(`<h1>Search results of the query ${q}</h1>`);
    })



    // app.get("/apple",(req,res)=>{
    //     res.send("You contacted apple path");
    // });

    // app.get("/orange",(req,res)=>{
    //     res.send("You contacted orange path");
    // });

    // app.get("*",(req,res)=>{
    //     res.send("The path does not exist");
    // });

    // It sends the response to the client and it gives only one response in all the routes
       // res.send("This is basic response");
       // res.send({
       //     name:"Madhav",
       //     age:18,
       // });
