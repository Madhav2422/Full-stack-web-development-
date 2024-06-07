let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function()
{
    let items=document.createElement("li");
    items.innerText=inp.value;
    ul.appendChild(items);
    
    // console.log(inp.value);
    inp.value=""

    let delbtns=document.createElement("button");
    delbtns.innerText="delete";
    items.appendChild(delbtns);

    ul.addEventListener("click",function(event)
    {
        if(event.target.nodeName=="BUTTON"){
            let listItems=event.target.parentElement;
            listItems.remove();
        }
    })

})

