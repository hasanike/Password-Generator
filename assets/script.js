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



function generatePassword(criteria) {
  const characters = getCharacterOptions(criteria);

  if (!characters) {
      // Handle the case where no character types are selected
      console.error("Error: Please select at least one character type for the password.");
      return null; // Return null if no character types are selected
  }

  const generatedPassword = generateRandomPassword(characters, criteria.length);

  if (!generatedPassword) {
      // Handle the case where password generation fails
      console.error("Error: Failed to generate password.");
      return null; // Return null if password generation fails
  }

  return {
      generatedPassword: generatedPassword,
      criteria: criteria
  };
}

function generateRandomPassword(characters, length) {
  if (!characters || characters.length === 0 || length <= 0) {
      return null; // Return null if characters or length are invalid
  }

  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }

  if (password.length !== length) {
      return null; // Return null if password length is incorrect
  }

  return password;
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

// The prompts the password must satisfy
function passwordPrompts() {
  var passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");

  var criteria = {
      length: parseInt(passwordLength),
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase,
      includeNumbers: includeNumbers,
      includeSpecialCharacters: includeSpecialCharacters
  };

  return criteria;
}


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