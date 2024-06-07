console.log("Hi there");

//  setTimeout( () =>
// {
//     console.log("Welcome to the college");
// },
// 4000)

//  let id = setInterval ( () =>
// {
//     console.log("Welcome to the college");
// },
// 2000)
// console.log(id);

// let id2 = setInterval ( () =>
// {
//     console.log("Hello world ");
// },
// 3000)
// console.log(id2);

// clearInterval(id);


let id = setInterval( () =>
{
  console.log("Hello World ");
},2000)

setTimeout(() =>
{
    clearInterval(id);
    console.log("Clear interval ran");
},10000)
 