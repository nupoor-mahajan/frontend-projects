let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll(".button");
let operator 
let string = "";
buttons.forEach( button => {
button.addEventListener('click',()=>{
  operator = button.innerText;
  if (operator === '=') {
    try {
      string = eval(string);
      input.value = string;
    } catch (error) {
      input.value = "Error";
    }
  } else if (operator === 'AC') {
    string = "";
    input.value = "0";
  } else if (operator === 'DEL') {
    string = string.slice(0, -1);
    input.value = string;
  } else {
    string += operator;
    input.value = string;
  }
})
});


