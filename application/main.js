"use strict";
// Greeting
alert("Welcome!");

// Users storage
const users = [];

// Ask to write username
const userName = getName();
greeting(userName);

// Main code
let isRunning = true;
while (isRunning) {
  // Get user choice using a prompt
  const choice = getUserChoice();

  // Switch statement to handle different user choices
  switch (choice.toUpperCase()) {
    case "A":
      // User wants to input new user data
      const userCard = prompt("Enter your card number");
      const cardDate = prompt("Card Date");
      const userCVV = prompt("CVV");

      // Validate the card number, date, and cvv before saving user data
      if (
        cardValidation(userCard) &&
        cardValidation(cardDate, "date") &&
        cardValidation(userCVV, "cvv")
      ) {
        const userInfo = userData(userName, userCard, cardDate, userCVV);
        // Add the user data to the users array
        users.push(userInfo);
      } else {
        // Show an error message if any input is not valid
        showError("Invalid input! Please check your data.");
      }
      break;

    case "B":
      // Perform new scum operation (implementation can be customized)
      newScumOperation("A new scum operation has been performed!");
      break;

    case "C":
      // User wants to quit, so exit the while loop
      isRunning = false;
      break;

    default:
      // Show an error message for invalid user choices
      showError("Incorrect data ...");
      break;
  }
}

// Greeting function to show a personalized welcome message
function greeting(name) {
  alert("Hello, " + name + "!");
}

// Get name from user function using a prompt
function getName() {
  return prompt("Enter your name here!");
}

// Function to get user choice using a prompt
function getUserChoice() {
  return prompt("a) Get users b) New scum operation c) Quit");
}

// Function to validate the card number, date, or cvv (checks if they have the specified number of digits)
function cardValidation(input, type) {
  const sanitizedInput = input.replace(/\D/g, "");
  switch (type) {
    case "date":
      return sanitizedInput.length === 4;
    case "cvv":
      return sanitizedInput.length === 3;
    default:
      return sanitizedInput.length === 16;
  }
}

// Function to create a user data object with provided information
function userData(userName, userCard, cardDate, userCVV) {
  return {
    name: userName,
    card: userCard,
    date: cardDate,
    CVV: userCVV,
  };
}

// Function to perform a new scum operation
function newScumOperation(msg) {
  alert(msg);
}

// Function to show an error message using an alert
function showError(msg) {
  alert(msg);
}

// Display the contents of the users array in the console
console.log(["Users"], users);
