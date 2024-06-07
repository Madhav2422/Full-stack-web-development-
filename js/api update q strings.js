let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);


    let cllgs= await getcoll(country);
    show(cllgs);

})

    function show(cllgs){
        let list=document.querySelector("#list");
        list.innerText="";
        for(col of cllgs){
            console.log(col.name);

            let li=document.createElement("li");
            li.innerText=col.name;
            list.appendChild(li);
            
        }
    }

async function getcoll(country)
{
    try{
        let res=await axios.get(url+country);
       return res.data;
     }
    catch(e){
        console.log("Error ",e);
        return [];
    }
}

