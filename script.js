// Assignment Code
var generateBtn = document.querySelector("#generate");

// User goes through prompt and validation for password length between 8 
// and 128
var validatePasswordLength = function() {
  var num = parseInt(prompt("Input password length between 8 and 128."), 10)

  while (Number.isNaN(num) || (num < 8 || num > 128)) {
    if (Number.isNaN(num)) {
      num = parseInt(prompt("Invalid entry. Input a password length between 8 and 128. Choose again (number input only)."), 10)
    }

    if (num < 8 || num > 128) {
      num = parseInt(prompt("Invalid number range. Input a password length between 8 and 128."), 10)
    }
  }

  return num
}

// User goes through prompts and validation to selet which character types 
// will be used in password
var captureCharacterTypes = function() {
  var charTypes = {
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialChars: false
  }

  var noneSelected = true

  while (noneSelected) {
    charTypes.lowercase = confirm("Include lowercase characters?")
    charTypes.uppercase = confirm("Include uppercase characters?")
    charTypes.numbers = confirm("Include numeric characters?")
    charTypes.specialChars = confirm("Include special characters?")

    if (charTypes.lowercase || charTypes.uppercase || charTypes.numbers ||charTypes.specialChars) {
      noneSelected = !noneSelected
    } else {
      alert("At least one character type must be included.")
    }
  }

  return charTypes
}

// This helper function starts the password with at least one of each of the chosen character types and gives the generatePassword function the possibleCharCombinations as well.
var possibleCharCombinations = function(charTypes) {
  var characterCombinations = ""
  var password = ""
  var chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghiklmnopqrstuvwxyz",
    numbers: "0123456789",
    specialChars: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  if (charTypes.lowercase) { 
    var len = chars.lowercase.length
    var randomChar = chars.lowercase[Math.floor(Math.random() * len)]

    characterCombinations = characterCombinations + (chars.lowercase) 
    password = password + randomChar
  }

  if (charTypes.uppercase) { 
    var len = chars.uppercase.length
    var randomChar = chars.uppercase[Math.floor(Math.random() * len)]
    
    characterCombinations = characterCombinations + (chars.uppercase) 
    password = password + randomChar
  }

  if (charTypes.numbers) {
    var len = chars.numbers.length
    var randomChar = chars.numbers[Math.floor(Math.random() * len)]
    
    characterCombinations = characterCombinations + (chars.numbers) 
    password = password + randomChar
  }

  if (charTypes.specialChars) { 
    var len = chars.specialChars.length
    var randomChar = chars.specialChars[Math.floor(Math.random() * len)]
    
    characterCombinations = characterCombinations + (chars.specialChars) 
    password = password + randomChar
  }

  return returnArr = {charCom: characterCombinations, password: password}
}


// used to shuffle characters to make truly randomized
var shuffleArray = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

// "Main" function that procedurally captures inputs to define limits on 
// making password, picks up on reference.password and fills in the 
// remaining chars needed to fill password length, and finally goes through
// shuffling once more to randomize password
var generatePassword = function() {
  var passwordLength = validatePasswordLength()
  var reference = possibleCharCombinations(captureCharacterTypes())

  for (let i = reference.password.length; i < passwordLength; i++) {
    reference.password = reference.password + reference.charCom[Math.floor(Math.random() * reference.charCom.length)]
  }

  var shuffledPassword = shuffleArray(reference.password.split('')).join('')

  return shuffledPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
