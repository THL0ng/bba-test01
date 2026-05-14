let powerUp = "mushroom";
let effect = "";
if(powerUp === "mushroom") {
    effect = "mario becomes Super!";
} else if(powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if(powerUp === "star") {
    effect = "Mario can invincible!";
} else if(powerUp === "None") {
    effect = "Mario is normal!";
} else {
    effect = "Unknown power up!";
}

console.log(effect);