let playerName ="Mario";
let currentLives = 3;
const coins = {
    "Level 1": 25,
    "Level 2": 30,
    "Level 3": 45,
}

let sum = coins["Level 1"] + coins["Level 2"] + coins["Level 3"];
console.log('The total number of coins collected is: ' + sum);
let average = sum / 3;
console.log('The average number of coins collected is: ' + average);
let remainder = sum % 3;
console.log('Số coin dư khi chia tổng số coin cho 3 là: ' + remainder);
