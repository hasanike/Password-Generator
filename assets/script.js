// Order of operations
  // click a button to create a password.
  // password criteria given
    // 8 < 128 characters
    // include lowercase, uppercase, numeric, and/or special characters
  // create password
  // generate password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Password Variables
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!@#$%^&*()_-=+[]{};:',<.>/?"
var checkLowercase;
var checkUppercase;
var checkNumber;
var checkSpecial;
var approvedPasswordLength;

function generatePassword() {
  var criteria = passwordPrompts(); // Get the criteria for password generation
  var password = "";
  var characters = "";
  var userChoice = [];
  


  if (criteria.includeUppercase) {
      characters += uppercase;
  }
  if (criteria.includeLowercase) {
      characters += lowercase;
  }
  if (criteria.includeNumbers) {
      characters += numbers;
  }
  if (criteria.includeSpecialCharacters) {
      characters += special;
  }

  // Generate password based on length and selected character sets
  for (var i = 0; i < approvedPasswordLength; i++) {
      var randomIndex = Math.floor(Math.random() * approvedPasswordLength);
      password += characters[randomIndex];
  }

  // Display the generated password
  console.log("Generated Password: " + password);
  return password;
}
// Write password to the #password input
function writePassword() {
    // Generate the password and assign it to the passwordText element
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// The prompts the password must satisfy
function passwordPrompts() {
  var passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  checkLength(passwordLength);
  
  var askLowercase = confirm("Do you want to include lowercase letters in your password?");
  var askUppercase = confirm("Do you want to include uppercase letters in your password?");
  var askNumbers = confirm("Do you want to include numbers in your password?");
  var askSpecial = confirm("Do you want to include special characters in your password?");
  
  var userChoice = [askLowercase, askUppercase, askNumbers, askSpecial];
  approvedChoices(userChoice);
}
// Verfies the length of the password meets the criteria
function checkLength(passwordLength) {
  // Checking for correct length criteria
  if (passwordLength > 128 || passwordLength < 8) {
      alert("Invalid Length, Try Again.\n\nPlease choose a password length between 8 to 128 characters.");
      return false; // Return false if the length is invalid
  } else{
      // Continue where passwordPrompts function left off
      return true; // Return true if the length is valid
  }
}
function approvedChoices(userChoice){
  // Checks if user did not pick any criterias for password
   if(!userChoice.some(Boolean)){
    // user will be prompted to start over
    alert("Try Again. You must choose at least one criteria for password.");
    passwordPrompts();
   }
   else{
      //checking if user wants to include lowercase letters
      if(userChoice[0] === true){
        askLowercase = true;
        console.log(askLowercase);
      }
      else{
        askLowercase = false;
        console.log(askLowercase);
      }
      if(userChoice[1] === true){
        askUppercase = true;
        console.log(askUppercase);
      }
      else{
        askUppercase = false;
        console.log(askUppercase);
      }
      if(userChoice[2] === true){
        askNumbers = true;
        console.log(askNumbers);
      }
      else{
        askNumbers = false;
        console.log(askNumbers);
      }
      if(userChoice[3] === true){
        askSpecial = true;
        console.log(askSpecial);
      }
      else{
        askSpecial = false;
        console.log(askSpecial);
      }
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);