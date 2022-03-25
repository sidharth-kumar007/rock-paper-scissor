var pngArray = ["rock.png", "paper.png", "scissor.png"];


var randomNumber1 = Math.floor(Math.random() * 3);
var randomImage1 = pngArray[randomNumber1];
var randomImageSource1 = "images/" + randomImage1; 
var image1 = document.querySelectorAll("img") [0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 3);
var randomImage2 = pngArray[randomNumber2];
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);

if (randomNumber1 == 0 && randomNumber2 == 0){
    document.querySelector("h2").innerHTML = "Its a DRAW";
}
else if (randomNumber1 == 0 && randomNumber2 == 1){
    document.querySelector("h2").innerHTML = "Player 2 WINS !!!";
}
else if (randomNumber1 == 0 && randomNumber2 == 2){
    document.querySelector("h2").innerHTML = "Player 1 WINS !!!";
}
else if (randomNumber1 == 1 && randomNumber2 == 0){
    document.querySelector("h2").innerHTML = "Player 1 WINS !!!";
}
else if (randomNumber1 == 1 && randomNumber2 == 1){
    document.querySelector("h2").innerHTML = "Its a DRAW";
}
else if (randomNumber1 == 1 && randomNumber2 == 2){
    document.querySelector("h2").innerHTML = "Player 2 WINS !!!";
}
else if (randomNumber1 == 2 && randomNumber2 == 0){
    document.querySelector("h2").innerHTML = "Player 2 WINS !!!";
}
else if (randomNumber1 == 2 && randomNumber2 == 1){
    document.querySelector("h2").innerHTML = "Player 1 WINS !!!";
}
else if (randomNumber1 == 2 && randomNumber2 == 2){
    document.querySelector("h2").innerHTML = "Its a DRAW";
}