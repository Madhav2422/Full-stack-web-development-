                //Expands an iterable into multiple values

let arr=[1,2,4,3,2,1,3,2,21,4,2]
console.log(...arr);

let str="Madhav Hirani"
console.log(...str);

                        // Array literals 

let a=[1,2,3,4,5,56]
let b=[...a];
console.log(b);

let name="King"
let newname=[...name];
console.log(newname);

let even=[2,4,6,8];
let odd=[1,3,5,7];

let number=[...odd,...even]
console.log(number);



                     // Object literals

const data={
    email:"mrhirani24@gmail.com",
    pass:123,
};

const datacopy={
    ...data,
    id:123
};

let m=[1,2,3,4,5,6,7] //val
let obj1={
    ...m  //obj ->key:val
}