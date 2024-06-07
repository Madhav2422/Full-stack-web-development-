function hello() {
       console.log("Hi");
}

function no()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

function printPoem()
{
        console.log("Twinkle twinkle little star");
}

function dice()
{
    let d=Math.floor(Math.random() * 6) +1;
    console.log(d);
}
dice();
printPoem();
no();
hello();

