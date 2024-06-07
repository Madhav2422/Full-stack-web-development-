let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);


    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("del");
    item.appendChild(del);
    inp.value = "";
})

ul.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.nodeName == "BUTTON") {
        let listItems = event.target.parentElement;
        listItems.remove();
        console.log("deleted");
    }

})
