// We use axios instead of fetch because in fetch we have to convert the data into JSON format and in this axios data response will be in the readable form

let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact= await getFacts();
    console.log(fact);
    let res=document.querySelector("#result");
    res.innerText=fact;

})

let url="https://catfact.ninja/fact";

async function getFacts()
{
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("Error " , e);
        return "No fact found";
    }
}
