# Password Generator

## Description
The app asks a series of prompts and based on the user input outputs a randomized password. Some limitations include:
  - Password must be between 8 to 128 characters long.
  - Password must at include at least one of the following: 
    - lowercase characters
    - uppercase characters
    - numbers
    - special characters
    - any combination of the above

Upon generating the password and shuffling characters in one pass, the password will display to the html page.

## Architecture

At a high level, Password Generator does the following steps:
  - Upon clicking the Generate Password button, the first prompt asks the user for a password length
  - If user's input is validated, the next few prompts capture what characters the user wants included in the password
  - From there, the start of a password is generated and appends more characters until the password length is reached.
  - The app will then shuffle once and then display the password afterwards.

At a much more detailed look:

- writePassword
- validatePasswordLength
- captureCharacterTypes
- possibleCharCombinations
- generatePassword
- shuffleArray

### writePassword
writePassword could be considered the main function of the app that has generatePassword within, which in turn has multiple helper functions. Within writePassword, generatePassword is invoked. From there, the output is then passed as the value of passwordText for the #password text area.

### validatePasswordLength
validatePasswordLength is invoked at the beginning of generatePassword. This helper function does the following:
  - prompts the user for a numeric password length between 8 and 128 characters.
  - does a validation check to see if A. the input is a number B. if the number is between the 8 and 128 range. 
    - if the validation check fails, the user is prompted again with instructions on why the previous input failed and will continue to prompt the user again until user provides a valid input
  - once the user has successfully given a valid input, the number is returned to generatePassword function.

### captureCharacterTypes
captureCharacterTypes is invoked after validatePasswordLength within generatePassword. This helper function does the following:
  - prompts the user on 4 confirm/cancel dialogs
    - include lowercase characters?
    - include uppercase characters?
    - include numeric characters?
    - include special characters?
  - again, a validation check is done to see that at least one of the four options is confirmed and therefore selected. 
    - if the validation check fails, the user is alerted that one character type must be included and restarts the chain of 4 confirm/cancel dialogs
  - once the user has successfully given valid input, the charTypes object is returned to the generatePassword function.

### possibleCharCombinations
possibleCharCombinations handles two things in particular:
  - based on the previous output of captureCharacterTypes, this function will then insert one randomized character of each of the confirmed option subsects to the beginning of the password.
  - also based on the previous output of captureCharacterTypes, this function will then merge different subsects of strings into one large string to have every possible character allowed.
  - this funciton finally returns an object with the char(acter)Com(binations) and password so far


### generatePassword
At line 117 of script.js, generatePassword will have a password length, and an object of the the reference characters allowed in the password and the start of the password. The password will be filled with randomized characters from the reference. charCom until it is the appropriate length. Finally from here, the password will go through one cycle of the shuffleArray function (I found this function within this [Stackoverflow article](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

### shuffleArray
Refer to above

