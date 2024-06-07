const max=prompt("Enter the max number ");
console.log(max);

const r=Math.floor(Math.random()* max) +1;

 let guess=prompt("Guess the number ");
 
 while(true)
 {
     if(guess=="quit")
     {
        console.log("User quit ");
        break;   
     }


     if(guess==r)
     {
        console.log("You are right the random number was",r);
        break;
     }

     else if(guess>r)
     {
        guess=prompt(" Your guess was too large ");
     }
     else if(guess<r)
     {
        guess=prompt(" Your guess was too small ")
     }

    //  else 
    //  {
    //     guess=prompt("Guess the number ");

    //  }
    
 }