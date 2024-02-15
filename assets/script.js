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

function generatePassword() {
  console.log ("Click the button to create a password");

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
    event.preventDefault();
    writePassword();
});

// Write password to the #password input
function writePassword() {
    // Generate the password and assign it to the passwordText element
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    // Prompt the user for password criteria
    var criteriapw = passwordPrompts();
}

// The prompts the password must satisfy
function passwordPrompts() {
  var passwordLength = prompt("How long would you like your password to be? between 8-128 characters")
  checkLength(passwordLength);
  var askLowercase = confirm("Does your password have lowercase letters?");
  var askUppercase = confirm("Does your password have uppercase letters?");
  var askNumbers = confirm("Does your password have numbers?");
  var askSpecial = confirm ("Does your password have special characters?");
  var userChoice = [askSpecial, askNumbers, askUppercase,askLowercase];

// // call the Users choices in order to process and store them
  approvedChoices(userChoice);
}

// Verfies the length of the password meets the criteria
function checkLength(passwordLength){
  //Checking for correct length criteria
  if (passwordLength > 128|| passwordLength < 8){
    alert("Invalid Length, Try Again.\n\nPlease choose a password length between 8 to 128 characters. ");
    //Starts over passwordPrompts function
    passwordPrompts();
  }
  else{
    //continues where passwordPrompts function left off 
    return Promise.resolve();
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
