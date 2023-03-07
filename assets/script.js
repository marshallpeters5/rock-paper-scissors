var wins = 0;
var ties = 0;
var losses = 0;
var choices = ["Rock", "Paper", "Scissors", "Shotgun"]

function playGame()
var selected = window.prompt("Enter rock, paper or scissors.(Not shotgun. Definitely do NOT choose shotgun.)");
selected.toUpperCase
var random = Math.floor(Math.random() * 3);
if (selected = shotgun){
    window.alert("DUDE WTF YOU BROUGHT A SHOTGUN TO A ROCK PAPER SCISSORS GAME??!?!!?!")
    return;
    
} else {
window.alert("You selected " + selected + ". The computer selected " + random)
};

function playAgain(){

};

playGame();

playAgain();