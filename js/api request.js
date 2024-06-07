let url="https://catfact.ninja/fact";

// fetch(url) // fetch function return the promise
// .then((response) => {
//     return response.json();
// })

// .then((data)=>{
//     console.log("data1" ,data);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log("data2" , data2);
// })

// .catch((err)=>{
//     console.log("Error" ,err);
// });



// console.log("I am happy");



async function getfacts(){
   try{
    let res = await fetch(url);
    let data=await res.json();
    console.log(data);

    let res2 = await fetch(url);
    let data2=await res2.json();
    console.log(data2);

   }
  catch(e){
    console.log("Error ",e);
  }
  console.log("Bye");
}