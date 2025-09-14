// problem 1
let Response;
let score = 75;
let machineactive = true;

if (machineactive) {
    if (score > 100 || score < 0) {
        Response = 'This is not possible, an error has occurred.'
    } else if (score >= 90 && score <= 100) {
        Response = 'What an amazing score! Did you cheat? Are you for real?'
    } else if (score >= 70 && score <= 89) {
        Response = 'That\'s a great score, you really know your stuff.'
    } else if (score >= 40 && score <= 69) {
        Response = 'You did a passable job, not bad'
    } else if (score >= 20 && score <= 39) {
        Response = 'You know some things, but it\'s a pretty bad score. Needs improvement'
    } else if (score >= 0 && score <= 19) {
        Response = 'That was a terrible score — total fail!'
    }
} else {
    Response = 'The machine is turned off, turn it on'
}

console.log(Response);