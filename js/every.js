        // Every-Return true if every element of the array gives true for some function .Else return false 
let num=[1,2,3]
let ans=num.every((el) =>
{
    return el%2==0;
})

                // Check all the numbers are the multiples of 10 or not
let nums=[10,20,30]
let a=nums.every((el) =>
{
    return el%10==0;
})
console.log(a);