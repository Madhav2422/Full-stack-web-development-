// let arr=[1,2,3,4,5,6]

// // let print = function(el)
// // {
// //     console.log(el);
// // }
// // arr.forEach(print);

// // arr.forEach(function (el)
// // {
// //     console.log(el);
// // })

//                                 //with arrow function
// arr.forEach((el) =>
// {
//     console.log(el);
// })

let arr=[{
    name:"Madhav",
    marks:110
},
{
    name:"Sahil",
    marks:120
},
{
    name:"Sinzu",
    marks:130
}]

arr.forEach((el) =>
{
   console.log(el.marks);
}
)