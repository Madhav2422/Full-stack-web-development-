function mulgreet(func,n) //Higher order function
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}


let greet=function()
{
    console.log("hello");
}
mulgreet(greet,10);