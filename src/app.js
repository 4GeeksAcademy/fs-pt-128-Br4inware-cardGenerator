import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"]
  const valueCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

  const randomPalo = function () {
    let random = palos[Math.floor(Math.random() * palos.length)]
    if (random === "♦" || random === "♥") {
      document.querySelector(".cardFooter").style.color = "red";
      document.querySelector(".cardHead").style.color = "red";
    } else {
      document.querySelector(".cardFooter").style.color = "black";
      document.querySelector(".cardHead").style.color = "black";
    }
    document.querySelector(".cardFooter").innerHTML = `<strong>${random}</strong>`
    document.querySelector(".cardHead").innerHTML = `<strong>${random}</strong>`
    return random
  }
  let paloActual = randomPalo();

  const randomValue = function () {
    let random = valueCard[Math.floor(Math.random() * valueCard.length)]
    if (paloActual === "♦" || paloActual === "♥") {
      document.querySelector(".cardBody").style.color = "red";
    } else {
      document.querySelector(".cardBody").style.color = "black";
    }

    document.querySelector(".cardBody").innerHTML = `<h1>${random}</h1>`

  }
  randomValue();


};
