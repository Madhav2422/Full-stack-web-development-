let btn=document.querySelector('button');

btn.addEventListener("click",function()
{
    let h3=document.querySelector('h3');
    let h2=document.querySelector('h2');
    let rancolor= getrandomcolor();
     h3.innerText=  rancolor;
    // console.log("Generate random")

    let div=document.querySelector("div");
    clr= rancolor.replace(/[^\d,]/g,'').split(',');
    //h2.innerText=color;
    //clr[0];
    // div.style.backgroundColor=rancolor;
    div.style.backgroundColor= rancolor;
   
});

function getrandomcolor()
{
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}