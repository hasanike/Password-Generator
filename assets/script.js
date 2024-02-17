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
var userChosen = "";



function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");


  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    // Handle the case where no character types are selected
    alert("Error: Please select at least one character type for the password.");
    return null; // Return null if no character types are selected
  }
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
  // 
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * userChosen.length);
    password += userChosen[randomIndex];
  }
  return password
}

function writePassword() {
  // Display a loading indicator while generating the password
  var passwordText = document.querySelector("#password");
  passwordText.value = "Generating password...";

  // Get the criteria for password generation
  var criteria = passwordPrompts();

  // Generate the password based on the criteria
  var passwordData = generatePassword(criteria);

  // Update the password input field with the generated password
  if (passwordData) {
    passwordText.value = passwordData.generatedPassword;
  } else {
    passwordText.value = "Error: Please select at least one character type.";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function checkLength(passwordLength) {
  // Checking for correct length criteria
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid Length, Try Again.\n\nPlease choose a password length between 8 to 128 characters.");
    return false; // Return false if the length is invalid
  } else {
    // Continue where passwordPrompts function left off
    return true; // Return true if the length is valid
  }
}
function approvedChoices(userChoice) {
  var criteria = {
    includeLowercase: userChoice[0],
    includeUppercase: userChoice[1],
    includeNumbers: userChoice[2],
    includeSpecialCharacters: userChoice[3]
  };

  if (!Object.values(criteria).includes(true)) {
    alert("Try Again. You must choose at least one criteria for the password.");
    passwordPrompts();
  } else {
    criteria.includeLowercase ? console.log("Include Lowercase: Yes") : console.log("Include Lowercase: No");
    criteria.includeUppercase ? console.log("Include Uppercase: Yes") : console.log("Include Uppercase: No");
    criteria.includeNumbers ? console.log("Include Numbers: Yes") : console.log("Include Numbers: No");
    criteria.includeSpecialCharacters ? console.log("Include Special Characters: Yes") : console.log("Include Special Characters: No");
  }
}