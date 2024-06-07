let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event)
{
    // console.log(event);
    // console.log("key was pressed");
    console.log("code = ",event.code); //Arrow down,Arrowup,Arrowright,Arrowleft

    if(event.code == "ArrowUp")
    {
        console.log("Arrow moves upward");
    }
    else if(event.code == "2")
    {
        console.log("Arrow moves Down")
    }
    else if(event.code == "13")
    {
        console.log("You have enter ENTER button")
    }
    else if(event.code == "ArrowLeft")
    {
        console.log("Arrow moves left/backward")
    }


})

// inp.addEventListener("keyup",function()
// {
//     console.log("key was released");
    
// })

