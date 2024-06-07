const mongoose=require("mongoose");
const Chat= require("./models/chat.js");


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

let allchats=[{
    from:"madhav",
    to:"sahil",
    msg:"What s up",
    created_at:new Date(),
},

{
    from:"madhav",
    to:"vedant",
    msg:"su kars",
    created_at:new Date(),
},
{
    from:"sahil",
    to:"madhav",
    msg:"i m fine",
    created_at:new Date(),
},
{
    from:"shyamsir",
    to:"madhav",
    msg:"have you completed js",
    created_at:new Date(),
},
{
    from:"vansh",
    to:"sahil",
    msg:"kai baju",
    created_at:new Date(),
},
]

 Chat.insertMany(allchats);
