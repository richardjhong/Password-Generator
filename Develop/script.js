// Assignment Code
var generateBtn = document.querySelector("#generate");

var validNum 

var validatePasswordLength = function() {
  var num = parseInt(prompt("Input password length between 8 and 128."), 10)

  console.log('num: ', num, Number.isNaN(num))

  if (Number.isNaN(num)) {
    while (Number.isNaN(num)) {
      num = parseInt(prompt("Invalid entry. Input a password length between 8 and 128. Choose again (number input only)."), 10)
    }
  }

  if (num < 8 || num > 128) {
    while (num < 8 || num > 128) {
      num = parseInt(prompt("Invalid number range. Input a password length between 8 and 128."), 10)
    }
  }

}

var generatePassword = function() {
  var password_to_generate = ""
  validatePasswordLength()

  alert("Test")
  return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
