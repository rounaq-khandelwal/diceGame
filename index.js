var player1name=prompt("Enter the name of player 1: ");
var player2name=prompt("Enter the name of player 2: ");
player1name=player1name.slice(0,1).toUpperCase()+player1name.slice(1,player1name.length);
player2name=player2name.slice(0,1).toUpperCase()+player2name.slice(1,player2name.length);
document.querySelector(".player1name").innerHTML=player1name;
document.querySelector(".player2name").innerHTML=player2name;
randomNumber1= Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
randomNumber2= Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="It's a draw";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=player1name+" wins";
}
else{
    document.querySelector("h1").innerHTML=player2name+" wins";
}
