function Game() {
  this.moves;
  this.score;
  this.size = 4;
}

Game.prototype.init = function () {
  this.moves = 0;
  this.score = 0;
  this.renderBoard();
  this.generateElementAtRandom();
};

Game.prototype.generateElementAtRandom = function () {
  let gridCells = document.getElementsByClassName("grid__cell");
  let newCellElement = this.createElement("grid__cellValue", 2);
  let position = Math.floor(Math.random() * gridCells.length);

  gridCells[position].appendChild(newCellElement);
};

Game.prototype.renderBoard = function () {
  let row = this.size;
  let col = this.size;
  let boardElement = document.getElementById("board");

  for (let i = 0; i < row; i++) {
    let gridRow = this.createElement("grid__row");

    for (let j = 0; j < col; j++) {
      let gridCell = this.createElement("grid__cell");
      gridRow.appendChild(gridCell);
    }
    boardElement.appendChild(gridRow);
  }
};

Game.prototype.createElement = function (className, value = null) {
  let divElement = document.createElement("div");
  divElement.className = className;

  if (value !== null) {
    let textNode = document.createTextNode(value);
    divElement.appendChild(textNode);
  }

  return divElement;
};

export default Game;
