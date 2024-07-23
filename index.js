function rollDice(){


    var image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

    var randomNumber1 = Math.floor(Math.random()*6);
    var img1 = image[randomNumber1]
    document.querySelector(".img1").setAttribute("src",img1)

    var randomNumber2 = Math.floor(Math.random()*6)
    var img2 = image[randomNumber2]
    document.querySelector(".img2").setAttribute("src",img2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🏁 Player 1 wins!";
        document.querySelector(".p1").innerHTML = "Winner 😎";
        document.querySelector(".p2").innerHTML = "Loser 😢";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins! 🏁"
        document.querySelector(".p1").innerHTML = "Loser 😢";
        document.querySelector(".p2").innerHTML = "Winner 😎";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!!! 🤝"
        document.querySelector(".p1").innerHTML = "Player 1 😄" 
        document.querySelector(".p2").innerHTML = "Player 2 😄"
    }
}
document.getElementById("roll").addEventListener("click",rollDice)
