            //Rest-Allows a function to take an indefinite number of argumentsnd bundle them into array

function sum(...args) //arguments
{
    for(let i=0;i<args.length;i++)
    {
        console.log("You gave us",args[i]);
    }
}


function min(a,b,c,d,e)
{
    console.log(arguments);
}


function max(hello, ...args)
{
    console.log("Hello");
    return args.reduce((max,el) => 
    {
         if(max>el)
         {
            return max;
         }  
         else
         {
            return el;
         }
    });
}