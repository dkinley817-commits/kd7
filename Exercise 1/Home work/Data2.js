const massTawamo = 95
const heightTawamo = 1.88

const massUgyen = 85
const heightUgyen = 1.76

const BMITawmo = massTawamo / heightTawamo ** 2
const BMIUgyen = massUgyen / (heightUgyen * heightUgyen)

const tawmoHigherBMI = BMITawmo > BMIUgyen
console.log(BMIUgyen, BMIUgyen, tawmoHigherBMI)