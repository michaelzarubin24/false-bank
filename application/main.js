"use strict";
alert("Welcome!");
const users = [];
const userName = getName();
greeting(userName);

let isRunning = true;
while (isRunning) {
  const choice = getUserChoice();
  switch (choice.toUpperCase) {
    case "A":
      const userCard = parseInt(prompt("Enter your card number"));
      const cardDate = parseInt(prompt("Card Date"));
      const userCVV = parseInt(prompt("CVV"));
      const userInfo = userData(userName, userCard, cardDate, userCVV);
      users.push(userInfo);
      break;
    case "B":
      break;
    case "C":
      isRunning = false;
      break;
    default:
      showError("Something went wrong , incorrect data ...");
      break;
  }
}

function greeting(name) {
  return "Hello, " + name + "!";
}

function getName() {
  return prompt("Enter your name here!");
}

function getUserChoice() {
  return prompt("a) Get users b) New scum operation c) Quit");
}

function userData(userName, userCard, cardDate, userCVV) {
  return {
    name: userName,
    card: userCard,
    date: cardDate,
    CVV: userCVV,
  };
}
function showError(msg) {
  alert(msg);
}
