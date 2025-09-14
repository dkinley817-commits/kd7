//q1
let [dolphinScore1, dolphinScore2, dolphinScore3] = [88, 110, 90];
let [koalaScore1, koalaScore2, koalaScore3] = [88, 120, 110];

//q2
let avgDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
let avgkoalas = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(`Team Dolphins averag: ${avgDolphin}`);
console.log(`Team koalas average: ${avgkoalas}`);

//q3
let teamDolphinsWin = (avgDolphin > avgkoalas);
let teamKoalasWin = (avgkoalas > avgDolphin);
let draw = (avgDolphin == avgkoalas);
console.log(`Did Dolphins win: ${teamDolphinsWin}`);
console.log(`Did Koalas win: ${teamKoalasWin}`);
console.log(`Is it a Draw: ${draw}`);

//q4
let option1Dolphins = dolphinScore1 >= 90 && dolphinScore2 >= 90 && dolphinScore3 >= 90;
let option2Dolphins = avgDolphin >= 100;
let teamDolphinQualify = option1Dolphins || option2Dolphins;

let option1Koalas = koalaScore1 >= 90 && koalaScore2 >= 90 && koalaScore3 >= 90;
let option2Koalas = avgkoalas >= 100;
let teamKoalaQualify = option1Koalas || option2Koalas;
console.log(`Team Dolphins qualify for Olympics 2026 🏆: ${teamDolphinQualify}`);
console.log(`Team Koalas qualify for Olympics 2026 🏆 : ${teamKoalaQualify}`);

