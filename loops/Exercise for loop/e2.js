let i = 0;
let sum = 0;

while(i<=25) {
    if (i%3 === 0 || i%5 === 0){
        sum = sum + i;
        console.log(`The sum is: ${sum}`);
    }
    i++
}


   