
     // Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("Please choose a password length between 8 and 100 total characters");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 100) {
    passwordLength = prompt("Please choose a password length between 8 and 100 total characters");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Would You Like lower case Letters In Your Password?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Would You Like UPPER CASE Letters In Your Password?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Would You L1ke Num8ers In Your Passw0rd?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Would You Like $pec!@L Ch@r@cter$ In Your Password?");
    console.log("Special Character " + confirmSpecial);

  };

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria");
  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true option
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}

