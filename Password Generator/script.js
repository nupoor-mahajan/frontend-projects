const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const specialInput = document.getElementById('special');
const passwordElement = document.getElementById('password');
const btn = document.getElementById('generate-btn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbersChars = '0123456789';
const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-';

btn.addEventListener('click', (event)=>{
  generatePassword();
  event.preventDefault();
});


function generatePassword() {
  
  const length = parseInt(lengthInput.value);
  const includeUppercase = uppercaseInput.checked;
  const includeLowercase = lowercaseInput.checked;
  const includeNumbers = numbersInput.checked;
  const includeSpecial = specialInput.checked;

  if (length <= 0) {
    alert('Please enter a valid password length');
    return;
  }
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
    alert('Please select at least one character type');
    return;
  }

  let password = '';
  if (includeUppercase) {
    password += getRandomCharacter(uppercaseChars);
  }
  else if (includeLowercase) {
    password += getRandomCharacter(lowercaseChars);
  }
  else if (includeNumbers) {
    password += getRandomCharacter(numbersChars);
  }
  else if (includeSpecial) {
    password += getRandomCharacter(specialChars);
  }
  for (let i = 1; i < length; i++) {
    const charSet = getCharacterSet(includeUppercase, includeLowercase, includeNumbers, includeSpecial);
    password += getRandomCharacter(charSet);
  }
  passwordElement.innerText = password;
}

function getCharacterSet(includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
  let charSet = '';
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeNumbers) {
    charSet += numbersChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }
  return charSet;
}

function getRandomCharacter(charSet) {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

passwordElement.addEventListener('click', () => {
  const passwordText = passwordElement.textContent;
  if (passwordText) {
    navigator.clipboard.writeText(passwordText);
    alert('Password copied to clipboard');
  } else {
    alert('No password to copy!');
  }
});