(function () {

    function comparaison(userChoice, computerChoice){
        if (userChoice === computerChoice) {
            document.getElementById("draw").innerHTML = "It's a draw, please press the Play again Button";
        } else if (userChoice === "rock") {
            if (computerChoice === "scissor") {
                document.getElementById("info").innerHTML = "You won! Your opponent had a scissor, please press the Play again Button";
            } else if (computerChoice === "paper") {
                document.getElementById("losing").innerHTML = "You've lost, unfortunately, against paper, rock loses. Please press the Play again Button";
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                document.getElementById("info").innerHTML = "You won! The paper beats the rock, please press the Play again Button";
            } else if (computerChoice === "scissor") {
                document.getElementById("losing").innerHTML = "You've lost, against a cutting scissor, please press the Play again Button";
            }
        } else if (userChoice === "scissor") {
            if (computerChoice === "paper") {
                document.getElementById("info").innerHTML = "You won! The scissor cuts the paper, please press the Play again Button";
            } else if (computerChoice === "rock") {
                document.getElementById("losing").innerHTML = "You've lost, broken by a rock, please press the Play again Button";
            }
        }
    }

    function getComputerChoice() {
        var computerChoice = Math.random();
        if (computerChoice <= 0.33) {
            computerChoice = "rock";
            document.getElementById("enemy").src = "rock.png";
        } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
            computerChoice = "paper";
            document.getElementById("enemy").src = "paper.png";
        } else {
            computerChoice = "scissor";
            document.getElementById("enemy").src = "scissors.png";
        }
        return computerChoice;
    }

    document.getElementById("rock").addEventListener("click", function () {
        const userChoice = "rock";
        const computerChoice = getComputerChoice();
        console.log(userChoice);
        comparaison(userChoice, computerChoice);
    });

    document.getElementById("paper").addEventListener("click", function () {
        const userChoice = "paper";
        const computerChoice = getComputerChoice();
        console.log(userChoice);
        comparaison(userChoice, computerChoice);
    });

    document.getElementById("scissor").addEventListener("click", function () {
        const userChoice = "scissor";
        const computerChoice = getComputerChoice();
        console.log(userChoice);
        comparaison(userChoice, computerChoice);
    });

    document.getElementById("replay").addEventListener("click", function () {
        window.location.reload();
    });

})();

function reloadPage() {
    window.location.reload();
}