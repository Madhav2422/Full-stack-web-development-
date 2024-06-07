let btns=document.querySelectorAll('button');


for(btn of btns)
{
    // btn.onclick= hi;
    // btn.onmouseenter=hee;
    // btn.addEventListener("click",hi);
    // btn.addEventListener("click",hee);
    btn.addEventListener("dblclick",hello);


}

function hi()
{
    console.log("button was liked ");

}

function hee()
{
    console.log("U entered through a mouse");
}

function hello()
{
    console.log("Madhav");
}
