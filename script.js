let password = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    let userInput = window.prompt("How many characters would you like your password to contain?");
    
    if (!userInput) {
        return;
    }

    if (userInput < 8 || userInput > 128) {
        window.alert("Password length must be at least 8 characters and no more than 128 characters ");
        return;
    
    } else if (userInput >= 8 && userInput <= 128) {
            let length = userInput;

           let hasSpecialChar = confirm("Click OK to confirm including special characters.", '');
           let hasNumbers = confirm("Click OK to confirm including numeric characters.", '');
           let hasLowerCase = confirm("Click OK to confirm including lowercase characters.", '');
           let hasUpperCase = confirm("Click OK to confirm including uppercase characters.", '');
           
           if (hasSpecialChar) {
               // OK: yes special characters
               // function to generate special characters
                let specialChar = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
                password += specialChar[Math.floor(Math.random() * specialChar.length)]; // adds to variable "password"
            }
            
            if (hasNumbers) {
                // OK: yes, numbers + special characters
                // function to generate numbers      
                password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);             
            } 

            if (hasLowerCase){
                // OK: yes, numbers + special characters + numbers
                // function to genearate lowercase
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            } 

            if (hasUpperCase){
                // OK: yes, numbers + special characters + numbers
                // function to genearate lowercase
                password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            }

    console.log(userInput, password.length);
    let genearateArray = ["!", "A", "b", "2"]; // add all types

    let index = 0;
    
        for (let i=0; i < userInput - password.length; i++) {
        console.log(userInput - password.length);
            
        index = Math.floor(Math.random() * genearateArray.length);
        password += genearateArray[index];
        }
} // end of generatePassword function
return password;
}