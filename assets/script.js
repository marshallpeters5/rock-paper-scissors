var choices = ["Rock", "Paper", "Scissors"]
var stats = ["Wins", "Losses", "Ties"]

function playGame(){
var selected = window.prompt("Enter rock, paper or scissors.");
selected.toUpperCase
var random = Math.floor(Math.random() * choices.length);

window.alert("You selected " + selected + ". The computer selected " + random)

}

playGame();