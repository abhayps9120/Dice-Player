var randomNumber1=Math.floor(Math.random() *6)+1;

var randomdice1="dice" + randomNumber1 + ".png";

var randomimg1= "images/" + randomdice1;

var image1=document.querySelectorAll("img")[0].setAttribute("src" , randomimg1);

var randomNumber2=Math.floor(Math.random() *6)+1;

var randomdice2="dice" + randomNumber2 + ".png";

var randomimg2= "images/" + randomdice2;

document.querySelectorAll("img")[1].setAttribute("src" , randomimg2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="DRAW 😔";
}
