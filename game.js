let userScore = 0;
let compScore = 0;
let userWin = true;
//it's for all three div rock papr nad scissor
const choices = document.querySelectorAll("#choices");
//it is for button
const para1 = document.querySelector("#para1");

//these 2 for score div
const yourScore = document.querySelector(".yourScore");
const comScore = document.querySelector(".comScore");

//generate computer choice
const genCompChoice = (compChoice) => {
    let option = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return option[random];
}

//for draw
const gameDraw = () => {
    para1.innerText = "Game was draw.Play again!";
    console.log("Game was draw");
}

//show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        yourScore.innerText = userScore;
        para1.innerText = "You win!"
        console.log("you win!")
    } else {
        compScore++;
        comScore.innerText = compScore;
        para1.innerText = "you lost!"
        console.log("you lost")
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("Computer choice is=", compChoice);
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "paper") {
            //rock and scissor
            userWin = compChoice ==="rock" ? false : true;
        } else if (userChoice === "rock") {
            //paper and scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //paper and rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
   
}









//using foreach access all div at once
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("class")
        console.log("user choice is=", userChoice);
        playGame(userChoice);
    })
})