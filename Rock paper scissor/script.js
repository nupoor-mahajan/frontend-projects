let choices = document.querySelectorAll("button");
let compChoice;
let value;
let userScore = 0;
let compScore = 0;
let result = document.querySelector("#result-text");
let uscore = document.querySelector("#you-score");
let cscore = document.querySelector("#computer-score");
let string;
choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        value = event.target.getAttribute('id');
        console.log(value);
        Comp();
    })
});

function Comp() {
    compChoice = Math.floor(Math.random() * 3)+1 ;
    if(compChoice === 1) {
    compChoice = "rock";
    }
    else if(compChoice === 2) {
    compChoice = "paper";
    }
    else  {
        compChoice = "scissors";
    }
    console.log(compChoice);
    check()
}
function check() {
   if (value === compChoice) {
    console.log("It's a tie!");
    string = "It's a tie!";
   }
   else if (value === "rock" && compChoice === "scissors") {
    console.log("Rock smashes scissors! You win!");
    string = "Rock smashes scissors! You win!";
    userScore++;
   }
   else if (value === "paper" && compChoice === "rock") {
    console.log("Paper covers rock! You win!");
    string = "Paper covers rock! You win!";
    userScore++;
   }
   else if (value === "scissors" && compChoice === "paper") {
    console.log("Scissors cuts paper! You win!");
    string = "Scissors cuts paper! You win!";
    userScore++;
    }
    else {
        console.log("You lose!");
        string = "You lose!";
        compScore++;
        }
        Score();
}
function Score() {
    uscore.innerText = userScore;
    cscore.innerText = compScore;
    result.innerText = string;
}