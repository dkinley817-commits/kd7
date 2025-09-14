let bill = parseFloat(prompt("Enter the bill amount:"));

let tip;

switch (true) {
  case (bill < 50 && bill > 300):
    tip = bill * 0.2;
    break;
  default:
    tip = bill * 0.15;
}

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`); 


// jsafg