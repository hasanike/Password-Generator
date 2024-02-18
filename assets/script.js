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

// Generates the password. 
function generatePassword() {
  var userChosen = "";
  var passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  // Enforces the lenght requirement or forces pick another number
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid Length, Try Again.\n\nPlease choose a password length between 8 to 128 characters.");
    return null; 
  }

  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");
  let password = '';

// if "no" to all the prompts are no, return an alert
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    // Handle the case where no character types are selected
    alert("Error: Please select at least one character type for the password.");
    return null; // Return null if no character types are selected
  }
  // if "yes" to at least one prompt, makes a custom passwork to user's desire
  if (includeLowercase) {
    userChosen = userChosen += lowercase
  }
  if (includeUppercase) {
    userChosen = userChosen += uppercase
  }
  if (includeSpecialCharacters) {
    userChosen = userChosen += special
  }
  if (includeNumbers) {
    userChosen = userChosen += numbers
  }
  // specifies an array limited by the number prompted by the user
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * userChosen.length);
    password += userChosen[randomIndex];
  }
  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
