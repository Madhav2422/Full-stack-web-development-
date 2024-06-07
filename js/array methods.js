                              //Push-add to end
let cars=["bmw","audi","toyota"];
console.log(cars.push("Mercedez"));
console.log(cars);


                            //Pop-delets from end and return it

let motors=["bmw","audi","toyota"];
console.log(motors.pop());
console.log(motors);

                         // Unshift-Add to start
let c=["bmw","audi","toyota"];
console.log(c.unshift("Maruti"));
console.log(c);

                        // Shift-Delete from start position and return it

let d=["bmw","audi","toyota"];
console.log(d.shift("Maruti"));
console.log(d);


                        // Indexof-Returns the index of string
                        // Includes-Search for value and return in boolean expression
let primary=["Red","yellow","Green"];
console.log(primary.indexOf("Red"));
console.log(primary.includes("green"));


                        // Concat-Merge 2 arrays

let primary1=["Red","yellow","Green"];
let secondary=["orange","blue"];
console.log(primary1.concat(secondary));


                        // Reverse-It reverse an array
let color=["red","blue","orange"];
console.log(color.reverse());


                        // Slice-Copies a portion of array
let colors=["red","white","purple","violet"];
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));
console.log(colors.slice(-1));


                      //  Splice-Removes/replaces/add elements- splice(start,Deletecount,add items0....itemN)
// The difference between slice and splice is slice returns in new array and splice changes in original array.

let cars2=["audi","bmw","mercedez","ferrari"];
console.log(cars2.splice(3));
console.log(cars2.splice(0,1));
console.log(cars2.push("hector","maruti"));
console.log(cars2.splice(0,0,"verna","swift"));
console.log(cars2.splice(2,0,"Scorpion"));



                     // Sorting-Sorts an array
let days=["monday","sunday","wednesday","tuesday"];
console.log(days.sort());

let number=[1,5,6,8,7,6];
console.log(number.sort());



                       // Questions
// let followers=["Sinu","Chintu","Dishant"];
// let blocked=followers.shift();
// console.log(followers);
// console.log(blocked);


// let start=["january","july","march","august"];
// start[1]="june";
// console.log(start.shift());
// console.log(start.unshift("july"));
// console.log(start);


let months=["january","july","march","august"];
console.log(months.splice(0,2,"july","june"));
console.log(months);

let l=["c","c++","html","js","python","java","c#","sql"];
console.log(l.reverse());
console.log(l.indexOf("js"));




