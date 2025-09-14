let choice = "raing";
let temperature = 100;

if (choice == "Sunny") {
    if (temperature < 86){
        console.log("It is a nice and sunny day");
    }
    else if (temperature > 86){
        console.log(`It is a burning hot with ${temperature} `)
    }
}
else if (choice === "rainy") {
        console.log("it is raining outside");
}
else if (choice === "snowy") {
    console.log("It is going to snow");
}
else if (choice === "ovecast") {
    console.log("It may or may not rain");
}
else {
    console.log("Invalid input");
}