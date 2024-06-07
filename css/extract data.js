let form=document.querySelector("form");

form.addEventListener("submit",function(event)
{
     event.preventDefault();

    //  let inp=document.querySelector("input");
        let user=document.querySelector("#user");
        let p=document.querySelector("#pass");

    //  console.dir(inp);
    //  console.log(inp.value);
     console.log(user.value);
     console.log(p.value);
     alert(`Hi Your username is ${user.value} and Your password is set to ${p.value}`);

})