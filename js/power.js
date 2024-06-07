const no = prompt("Enter a two-digit number:");

if (no.length !== 2) {
  console.log("Please enter  two-digit number.");
} 
else {
  const base = parseInt(no[0]);
  const power = parseInt(no[1]);


  if (isNaN(base) || isNaN(power)) {
    console.log("Invalid.");
  } else {
    const result = Math.pow(base, power);
    console.log(`${base} ${power} is ${result}`);
    console.log((base) (power) + result);
  }
}
