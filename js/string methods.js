                            //Trim method-It removes the whitespace from the string 
let str="   Hello     ";
console.log(str.trim())

                            // String are immutable(they cannot change they return in new string )

                            // To Uppercase and to lowercase
let names="Madhav";
let msg="error";

console.log(msg.toUpperCase());
console.log(names.toLowerCase());

                            // Indexof() method-It returns the first index of the occurence of some value of string.
let name1="Ilovecoding"
console.log(name1.indexOf("love"));
console.log(name1.indexOf("J"));
console.log(name1.indexOf("o"));

                            // Method chaining-Using one method after another.Order of execution will be left to right
let str1='  hello  '
let newmsg=str1.trim().toUpperCase();
console.log(newmsg);


                            // Slice method-Returns the part of the original string as a new string
let str2="Ilovemadhu";
console.log(str2.slice(1,5));
console.log(str2.slice(1));
console.log(str2.slice(-2)); // Total length - number = 11-2=9


                            // Replace method-Searches a value in the string & returns a new string with the value replaced-It replaces only the first occurence
let m="Iloveyou";
console.log(m.replace("you","u"));


                            //Repeat method-Returns the string with the number of copies of a string
let d="Madhav";
console.log(d.repeat(2));