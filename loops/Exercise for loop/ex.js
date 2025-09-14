let j = 0;
do {
    if(j%2 === 0) {
        if(j === 6) {
            console.log(`The number is 6`);
            break;
        }
        else {
            console.log("Even")
        }
    }
    else {
        console.log("odd")
    }
    j++;
}
while(j<=6);

