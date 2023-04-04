let gameBoard = [];
let players = [];
let moves = 0;
let p1wins = 0;
let p2wins = 0;
const board = document.querySelector(".board");
const form = document.querySelector("#form");  
const wins = document.getElementById("wins");

const boardFactory = (() => {
  const boardMaker = (n) => {
    for (i = 0; i < n; i++) {
      let div = document.createElement("div");
      div.classList.add("cell");
      div.setAttribute("data-index", `${i}`);
      board.appendChild(div);
      let cell = document.querySelector(`[data-index="${i}"]`);
      gameBoard.push(cell);
    };
  };
  return { boardMaker };
})();

const player = (name) => {
  const pushName = () => players.push(name);
  return { name, pushName };
};

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let nameOne = document.querySelector("#playerOne").value;
  let nameTwo = document.querySelector("#playerTwo").value;
  let playerOne = player(nameOne);
  let playerTwo = player(nameTwo);
  playerOne.pushName();
  playerTwo.pushName();
})

boardFactory.boardMaker(9);

const game = (() => {
  const engine = () => {
    gameBoard.forEach(element => {
      element.onclick = () => { 
        if (moves % 2 === 0) {
          if (element.textContent === "") element.textContent = "X";
          else if (element.textContent !== "") moves = moves -1;
        }else if (moves % 2 === 1) {
          if (element.textContent === "") element.textContent = "O";
          else if (element.textContent !== "") moves = moves -1;
        };
        if ((gameBoard[0].textContent === "X" && gameBoard[1].textContent === "X" && gameBoard[2].textContent === "X")
        || (gameBoard[3].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[5].textContent === "X") 
        || (gameBoard[6].textContent === "X" && gameBoard[7].textContent === "X" && gameBoard[8].textContent === "X") 
        || (gameBoard[0].textContent === "X" && gameBoard[3].textContent === "X" && gameBoard[6].textContent === "X") 
        || (gameBoard[1].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[7].textContent === "X") 
        || (gameBoard[2].textContent === "X" && gameBoard[5].textContent === "X" && gameBoard[8].textContent === "X") 
        || (gameBoard[0].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[8].textContent === "X") 
        || (gameBoard[2].textContent === "X" && gameBoard[4].textContent === "X" && gameBoard[6].textContent === "X")) {
          alert(`${players[0]} wins`);
          p1wins++;
          moves = -1;
          for (i = 0; i < gameBoard.length; i++) {
            gameBoard[i].textContent = "";
          };
          wins.textContent = `${players[0]}: ${p1wins} ${players[1]}: ${p2wins}`;
        };
        if ((gameBoard[0].textContent === "O" && gameBoard[1].textContent === "O" && gameBoard[2].textContent === "O")
        || (gameBoard[3].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[5].textContent === "O") 
        || (gameBoard[6].textContent === "O" && gameBoard[7].textContent === "O" && gameBoard[8].textContent === "O") 
        || (gameBoard[0].textContent === "O" && gameBoard[3].textContent === "O" && gameBoard[6].textContent === "O") 
        || (gameBoard[1].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[7].textContent === "O") 
        || (gameBoard[2].textContent === "O" && gameBoard[5].textContent === "O" && gameBoard[8].textContent === "O") 
        || (gameBoard[0].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[8].textContent === "O") 
        || (gameBoard[2].textContent === "O" && gameBoard[4].textContent === "O" && gameBoard[6].textContent === "O")) {
          alert(`${players[1]} wins`);
          p2wins++;
          moves = -1;
          for (i = 0; i < gameBoard.length; i++) {
            gameBoard[i].textContent = "";
          };
          wins.textContent = `${players[0]}: ${p1wins} ${players[1]}: ${p2wins}`;
        };
        if (moves === 8 && gameBoard[0].textContent !== "") {
          alert("It's a draw!")
          moves = -1;
          for (i = 0; i < gameBoard.length; i++) {
            gameBoard[i].textContent = "";
          };
        };
        if (p1wins === 3 || p2wins === 3) {
          if (p1wins === 3) {
            wins.textContent = `${players[0]} Wins!`;
            p1wins = 0;
            p2wins = 0;
          };
          if (p2wins === 3) {
            wins.textContent = `${players[1]} Wins!`;
            p1wins = 0;
            p2wins = 0;
          };
        };
        moves = moves + 1;
      };
    });
  };
  return { engine };
})();

game.engine();