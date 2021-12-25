let val1 = Math.ceil(Math.random() * 6);
console.log(val1);
let val2 = Math.ceil(Math.random() * 6);
console.log(val2);

document.querySelector(".img1").setAttribute("src", "images/dice"+val1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+val2+".png");

if(val1 > val2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩Player1 Wins";
}
else if(val1 < val2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player2 Wins 🚩";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Draw! 🚩";
}

