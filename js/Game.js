function Game() {
  this.boardArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}

Game.prototype.generateNumber = function () {};

Game.prototype.renderBoard = function () {
  console.log("let's see what comes up =>", document.querySelectorAll(".row"));

  let rowElements = document.querySelectorAll(".row");

  rowElements.forEach((rowElement, i) => {
    for (let j = 0; j < 4; j++) {
      rowElement.children[j].innerHTML = "A";
    }
  });
};

export default Game;
