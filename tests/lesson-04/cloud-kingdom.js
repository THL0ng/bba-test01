let playerName ="Mario";
let currentLives = 3;
const coins = {
    "Level 1": 25,
    "Level 2": 30,
    "Level 3": 45,
}

sum = coins["Level 1"] + coins["Level 2"] + coins["Level 3"];
console.log('The total number of coins collected is: ' + sum);
average = sum / 3;
console.log('The average number of coins collected is: ' + average);