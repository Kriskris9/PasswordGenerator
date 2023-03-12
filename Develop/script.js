// Assignment Code
var SpecialCharacters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
var  UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var UserChoice = ''
var length = ''
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function GenerateRandomPassword()
{ var length = prompt ("Please choose a desired length.");
  if (length < 0 || > 120 ) { alert ("Password must be between 8 to 120 characters.")};


}