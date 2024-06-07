let fav="DDLJ";
let guess=prompt("Guess my favorite movie");

while((guess!=fav) && (guess!="quit"))
{
   
   
    guess=prompt(" Wrong Guess my favorite movie");   
}

 if(guess==fav)
 {
    console.log("Congratulations u have guesses a right movie");
 }
 else
 {
    console.log("Thank you for trying");
 }
