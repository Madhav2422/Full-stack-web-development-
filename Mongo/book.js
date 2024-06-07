const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,   // not null
        maxLenght:30,
    },
    author:{
        type:String,
       
    },
    price:{
        type:Number,
        min:[1,"Price is too low for selling"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
        
    },
    genre:[String],
})

const Book=mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("66254266a45a4d595e5baa70",{price:-22},{runValidators:true}).then((res)=>{
        console.log(res);
     })
     .catch((err)=>{
         console.log(err.errors.price.properties.message);
     })

// let book1=new Book({
//     title:"Maths Std 1",
//     author:"RD Sharma",
//     price:30000,
//     category:"fiction",
//     genre:["superheroes","fiction","non-fiction"],
// });
// book1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })