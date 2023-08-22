var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomImageSRC1 = "images/"+randomImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSRC1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent = "🤝It's a Draw!🤝";
}