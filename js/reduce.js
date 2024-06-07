        // Reduce method-It reduces thr array into single value

// let num=[1,2,3,5]
// let ans=num.reduce((rel,el) =>
// {
//     return rel+el;
// })
// console.log(ans);

                        // Maximum from the array
// let nums=[2,4,55,676,53,3,21,1]
// let max=nums.reduce((rel,el) =>
// {
//   if(rel<el)
//   {
//     return el;
//   }
//   else{
//     return rel;
//   }
  
// })
// console.log(max);

                        //Minimum from the array

let num=[1,32,4,3,43,6,,5221,32]
let min=num.reduce((rel,el) =>
{
     if(rel>el)
     {
        return el;
     }
     else
     {
        return rel;
     }
})

console.log(min);




