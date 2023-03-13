// Assignment Code
var SpecialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
var  UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var Numbers = "01234567890"
var UserChoice = ''
var length;

var generateBtn = document.querySelector("#generate");

function generatePassword(){ 
  length = prompt ("Please choose a desired length.");
  if (length < 8 || length > 120 ) { 
    alert("Password must be between 8 to 120 characters.");
generatePassword();
}; 

var UPC = confirm("Do you want UpperCase Letters?");
var LRC= confirm("Do you want LowerCaseLetters?");
var SPC = confirm( "Do you want Special Characters?");
var Numb = confirm (" Do you want Numbers?")
if (Numb) {
  UserChoice += Numbers
}
if (UPC) { 
  UserChoice += UpperCaseLetters 
}
if (LRC){
  UserChoice += LowerCaseLetters
}
if (SPC) {
  UserChoice += SpecialCharacters
}

var Randomized = ''
for (var count = 0; count < length; count++) {
  var index = Math.floor(Math.random() * UserChoice.length)
Randomized += UserChoice[index]
}23

return Randomized;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




