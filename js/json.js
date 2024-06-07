let jsonRes = '{"fact":"At 4 weeks, it is important to play with kittens so that they do not develope a fear of people.","length":95}'

// console.log(jsonRes);

// Converting JSON data to js object
let valid=JSON.parse(jsonRes);

console.log(valid.fact);


let student={
    name:"Madhav",
    number:7043067250,
};

let json=JSON.stringify(student);
console.log(json);