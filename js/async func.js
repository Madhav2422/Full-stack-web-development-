async function greet()
{
    throw "Weak connection";
    return "hello";
}
greet()
.then(()=>
{
    console.log("Promise was resolved");
    console.log("result ",result);

})

.catch((err)=>{
    console.log("Promise was rejected");
    console.log(err);
});

let demo= async ()=>{
    return 5;
}