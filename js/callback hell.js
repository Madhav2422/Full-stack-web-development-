let h1=document.querySelector("h1");

function changeColor(color,delay)
{
  return new Promise((resolve,reject)=>
   {
    setTimeout(()=>{
        h1.style.color=color;
        resolve("color changed");
    },delay); 
   });
}

async function demo()
{
   await changeColor("red",1000);
   await  changeColor("yellow",1000);
    changeColor("orange",1000);
}




// changeColor("red",1000)
// .then(()=>{
//         console.log("red color was changed");
//         return changeColor("yellow",1000)
// })
// .then(()=>{
//     console.log("yellow color was changed");
//     return changeColor("green",1000)
// });


// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("green",1000)
//     });
// });    


// callback nesting -- callback hellq


// function savetoDb(data,success,failure){
//     let intspeed=Math.floor(Math.random()*10)+1;
//     if(intspeed>4){
//        success();
//     }
//    else{
//     failure();
//    }
// }

// savetoDb("Madhav",()=>{
//     console.log("success: Data was saved");
//      savetoDb("Hello world",()=>{
//         console.log("success 2 : data was saved ");
//     },
//     ()=>{
//         console.log("weak connection: data was not saved ");
//     }
//      );
// },
// () => {
//     console.log("failure : Weak Connection,data was not saved");
// });

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let intspeed = Math.floor(Math.random() * 10) + 1;
//         if (intspeed > 4) {
//             resolve("success:data was saved");
//         }
//         else {
//             reject("weak connection :Data was not saved ");
//         }
//     });
// }

// savetoDb("madhav hirani") // 
//     
//     .then((result) => {
//         console.log("data1 saved:Promise was fulfilled");
//         console.log("Result ",result);
//         return savetoDb("hello");
//     })

//     .then((result)=>
//     {
//         console.log("data2 : saved");
//         console.log("Result ",result);
//         return savetoDb("saurabh");

//     })
    
//     .then((result)=>
//     {
//         console.log("data3:saved");
//         console.log("Result ",result);
//     })


//     .catch((error) => {
//         console.log("Promise was Rejected");
//         console.log("Error",error);

//     });