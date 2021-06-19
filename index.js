var randomNumber1 = Math.floor(((Math.random()*6)+1));
// var randomDiceImage = "images/dice" + randomNumber1 +".png";
var randomDiceImage = "images/dice6.png";
if(document.querySelector("img img1").randomNumber1 > document.querySelector("img img2").randomNumber1) {
   document.querySelector("h1").innerText="Player 1 Wins!";
}
else if(document.querySelector("img img1").randomNumber1 < document.querySelector("img img2").randomNumber1) {
  document.querySelector("h1").innerText="Player 2 Wins!";
}
else {
  document.querySelector("h1").innerText="Draw!";
}
