var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 =Math.floor(Math.random()*6+1);

var firstDice = document.querySelector(".img1");
var secondDice = document.querySelector(".img2");

// Dice 1:

if (randomNumber1===1) {
    firstDice.setAttribute("src","images/dice1.png");
}
else if (randomNumber1===2) {
    firstDice.setAttribute("src","images/dice2.png");
}
else if (randomNumber1===3) {
    firstDice.setAttribute("src","images/dice3.png");
}
else if (randomNumber1===4) {
    firstDice.setAttribute("src","images/dice4.png");
}
else if (randomNumber1===5) {
    firstDice.setAttribute("src","images/dice5.png");
}
else  {
    firstDice.setAttribute("src","images/dice6.png");
}

// Dice 2:

if (randomNumber2===1) {
    secondDice.setAttribute("src","images/dice1.png");
}
else if (randomNumber2===2) {
    secondDice.setAttribute("src","images/dice2.png");
}
else if (randomNumber2===3) {
    secondDice.setAttribute("src","images/dice3.png");
}
else if (randomNumber2===4) {
    secondDice.setAttribute("src","images/dice4.png");
}
else if (randomNumber2===5) {
    secondDice.setAttribute("src","images/dice5.png");
}
else  {
    secondDice.setAttribute("src","images/dice6.png");
}

// H1 Text change:

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!"
}