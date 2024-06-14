let trun = true;
var count = 0;

var buttons = document.querySelectorAll(".button");
var h1 = document.querySelector("h1");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.disabled = true;
    count++;
    if (trun === true) {
      button.innerText = "X";
      h1.innerText = "O's trun";
      trun = false;
    } else {
      button.innerText = "O";
      h1.innerText = "X's trun";
      trun = true;
    }
    winnerCheck();
  });
});
let newGame = document.getElementById("newGame");
newGame.addEventListener("click", () => {
  buttons.forEach((value, index) => {
    value.disabled = false;
    value.innerText = "";
    h1.innerText = "Welcome";
    count = 0;
    trun = true;
  });
});

function winnerCheck() {
  for(let condition of conditions) {
    var pos0 = buttons[condition[0]].innerText;
    var pos1 = buttons[condition[1]].innerText;
    var pos2 = buttons[condition[2]].innerText;

    if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
      if (pos0 === pos1 && pos1 === pos2) {
        h1.innerText = pos0 + " is winner";
        buttons.forEach((value) => {
          value.disabled = true;
        });
        break;
      } else if (count === 9) {
        h1.innerText = "Draw";
      }
    }
  });
}
