const characters = [
    { name: "Mario", level: 5, health: 250},
    { name: "Luigi", level: 3, health: 180},
    { name: "Peach", level: 4, health: 220},
    { name: "Toad", level: 2, health: 150},
    { name: "Bowser", level: 6, health: 950},
    { name: "Koopa", level: 7, health: 350},
    { name: "Bowser Jr.", level: 8, health: 400},
    { name: "Princess Peach", level: 9, health: 450},
    { name: "Princess Daisy", level: 10, health: 900},
];

let characterPowerUp = characters.map(char => {
    return {
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 1.5
    };
});
console.log(characterPowerUp);
let possibleWinners = characterPowerUp.filter(char => char.health > 1000);
console.log(possibleWinners);




/* 2. Tạo một hàm printLeaderboard*/
const playerBoard = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 800 },
    { name: "Toad", score: 700 },
    { name: "Bowser", score: 600 },
    { name: "Koopa", score: 500 },
    { name: "Bowser Jr.", score: 400 },
    { name: "Princess Peach", score: 300 },
    { name: "Princess Daisy", score: 200 }
];

console.log("Xếp hạng player theo score từ cao xuống thấp:");
const rankScore = playerBoard.sort((a, b) => b.score - a.score);
console.log(rankScore);


function createLeaderboard(players) {
    return players.map((player, index) => {
        let medal = "";

        if (index === 0) medal = "🥇 Gold";
        else if (index === 1) medal = "🥈 Silver";
        else if (index === 2) medal = "🥉 Bronze";
        else medal = `${index + 1}th`;

        return `${medal}: ${player.name} - ${player.score} pts`;
    });
}

console.log(createLeaderboard(rankScore));