let gameBoard = [];
let players = [];
let moves = 0;
let p1wins = 0;
let p2wins = 0;
let board = document.querySelector(".board");
let form = document.querySelector("#form");  

const boardFactory = (() => {
 
  const boardMaker = (n) => {
    
    for (i = 0; i < n; i++) {
      let div = document.createElement("div");
      div.classList.add("cell");
      div.setAttribute("data-index", `${i}`);
      board.appendChild(div);
      let cell = document.querySelector(`[data-index="${i}"]`);
      gameBoard.push(cell);
    }
  
  }

  return { boardMaker };
})();

const player = (name) => {
  players.push(name);
  return { name };
};

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let nameOne = document.querySelector("#playerOne").value;
  let nameTwo = document.querySelector("#playerOne").value;
  let playerOne = player(nameOne);
  let playerTwo = player(nameTwo);
})

boardFactory.boardMaker(9);

const game = (() => {
  const engine = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i].addEventListener('click', () => { 
        if (moves % 2 === 0) {
          gameBoard[i].textContent = "X";
        }else {
          gameBoard[i].textContent = "O";
        };
        if ((gameBoard[0].textContent === "X" && gameBoard[1].textContent === "X" && gameBoard[2].textContent === "X")
        || (gameBoard[3].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[5].textContent === "X") 
        || (gameBoard[6].textContent === "X" && gameBoard[7].textContent === "X" && gameBoard[8].textContent === "X") 
        || (gameBoard[0].textContent === "X" && gameBoard[3].textContent === "X" && gameBoard[6].textContent === "X") 
        || (gameBoard[1].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[7].textContent === "X") 
        || (gameBoard[2].textContent === "X" && gameBoard[5].textContent === "X" && gameBoard[8].textContent === "X") 
        || (gameBoard[0].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[8].textContent === "X") 
        || (gameBoard[2].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[6].textContent === "X")) {
          alert(`${players[0]} wins`)
          p1wins++;
        }
        if ((gameBoard[0].textContent === "O" && gameBoard[1].textContent === "O" && gameBoard[2].textContent === "O")
        || (gameBoard[3].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[5].textContent === "O") 
        || (gameBoard[6].textContent === "O" && gameBoard[7].textContent === "O" && gameBoard[8].textContent === "O") 
        || (gameBoard[0].textContent === "O" && gameBoard[3].textContent === "O" && gameBoard[6].textContent === "O") 
        || (gameBoard[1].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[7].textContent === "O") 
        || (gameBoard[2].textContent === "O" && gameBoard[5].textContent === "O" && gameBoard[8].textContent === "O") 
        || (gameBoard[0].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[8].textContent === "O") 
        || (gameBoard[2].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[6].textContent === "O")) {
          alert(`${players[0]} wins`)
          p2wins++;
        };
        if (moves === 8) {
          alert("It's a draw!")
        }
        moves++;
      })
    }
  }
  return { engine };
})();

game.engine();