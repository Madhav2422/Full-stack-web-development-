const mongoose = require('mongoose');

main().then(()=>{
    console.log("Hello");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

// const user2=new User({
//     name:"Sinu",
//     email:"sinuh@gmail.com",
//     age:24
// });

// user2
// .save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {name:"Parth",email:"p@gmail.com",age:30},
//     {name:"Harsh",email:"h@gmail.com",age:23}
// ])
// .then((data)=>{
//     console.log(data);
// })

// User.find({age:{$gt:12}})
// .then((res)=>{
//     console.log(res);
// })

// .catch((err)=>{
//     console.log(err);
// })

// User.findById("6623c2975390b6e86c3dff84")
// .then((res)=>{
//     console.log(res);
// })

// .catch((err)=>{
//     console.log(err);
// })


// User.updateOne({name:"Madhav"},{age:23})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age: {$gt:25}} , {age:40})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"Sinu"},{age:99})
// .then((res)=>{
//         console.log(res);
//      })
//      .catch((err)=>{
//          console.log(err);
//      });

// User.deleteOne({name:"Harsh"}).then((res)=>{
//     console.log(res);
// });

// User.findByIdAndDelete("6623c40ece5422ab00c49fbd").then((res)=>{
//     console.log(res);
// });

User.findOneAndDelete({name:"Sinu"}).then((res)=>{
    console.log(res);
});