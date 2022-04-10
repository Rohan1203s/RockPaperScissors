document.getElementById("rocks").addEventListener("click", playGame);
document.getElementById("papers").addEventListener("click", playGame);
document.getElementById("scissorss").addEventListener("click", playGame);
document.getElementById("clear").addEventListener("click", clear);
var scoreHuman = document.getElementById("humanScore");
var scoreComputer = document.getElementById("computerScore");
//returns elements to html using event listeners. Once user clicks on a choice, playGame() function begins. Also, clear resets the code.

function playerOption() {
var inputs = document.getElementsByName("option");

for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
    return inputs[i].value;
    }
  }
};
//player choices taken in through inputs at which when clicked will make their choice a value to be used against the computer.
function playGame() {
  var Selections = ["Rock", "Paper", "Scissors"];
  var playerChoice = playerOption();
  var computerChoice = Selections[Math.floor(Math.random() * 3)];
  // math random is used to determine computer choices. Three possible outcomes are entered above.
  document.getElementById("humanResult").innerHTML = playerChoice;
  document.getElementById("computerResult").innerHTML = computerChoice;
  //returns it to html so the choices can be shown

//determine who wins or loses through the use of conditonals - if-else statemnts and helper functions
    if ( playerChoice === computerChoice ){
          document.getElementById("result").innerHTML = "Tie Game"
    }
    if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
          document.getElementById("result").innerHTML = "Player Wins"
          scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1;
        } else {
          if (computerChoice === "Paper") {
            document.getElementById("result").innerHTML = "Computer Wins"
            scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          }
        }
    }
    if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
          document.getElementById("result").innerHTML = "Player Wins"
          scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1;
        } else {
          if (computerChoice === "Rock") {
            document.getElementById("result").innerHTML = "computer wins"
             scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          }
        }
    }
    if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
          document.getElementById("result").innerHTML = "Player Wins"
          scoreHuman.innerHTML = parseInt(scoreHuman.innerHTML)+1;
        } else {
          if (computerChoice === "Scissors") {
            document.getElementById("result").innerHTML = "Computer Wins"
             scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          }
        }
    }

};
//each element is assigned to be part of the scoreboard
function clear() {
  document.getElementById('humanResult').innerHTML = "";
  document.getElementById('computerResult').innerHTML = "";
  document.getElementById('result').innerHTML = "";
  document.getElementById('humanScore').innerHTML = "0";
  document.getElementById('computerScore').innerHTML = "0";
};
