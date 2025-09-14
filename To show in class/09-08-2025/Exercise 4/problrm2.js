/* Problem #3*/
let machineActive = true
let pwd = 'cheese'

let machineResult
let pwdResult

if (machineActive) {
    machineResult = 'Machine is active. Trying login.'
    pwdResult = (pwd === 'cheese') ? 'Login successful.' : 'Password incorrect; login failed.'
} else {
    machineResult = 'Machine is inactive. Activate and try logging in again.'
}
console.log(machineResult);
console.log(pwdResult);