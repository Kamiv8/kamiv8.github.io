const cells = document.querySelectorAll('.cell');
const activePlayerBox = document.querySelector('.activePlayer');
const resetBtn = document.querySelector('.reset');

let table = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const winExamples = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const exDiv = `<div class="ex">X</div>`;
const circle = `<div class="circle"></div>`;
let activePlayer = exDiv;
let counter = 0;
const showActivePlayer = (active) => {
  activePlayerBox.innerHTML = `<div>Teraz jest ruch: </div> ${active}`;
}
const showWinner = () => {
  activePlayerBox.innerHTML = `Zwycięzcą jest: ${activePlayer}`
}
const checkIsWon = () => {
  for (let i = 0; i < table.length - 1; i++) {
    const [one, two, three] = winExamples[i];
    if (table[one] !== 0 && table[one] === table[two] && table[one] === table[three]) {
      return true;
    }
  }
  return false;
}

const addToMatrix = (id) => {
  switch (+id) {
    case 0:
      activePlayer === exDiv ? table[0] = 1 : table[0] = -1;
      break;
    case 1:
      activePlayer === exDiv ? table[1] = 1 : table[1] = -1;
      break;
    case 2:
      activePlayer === exDiv ? table[2] = 1 : table[2] = -1;
      break;
    case 3:
      activePlayer === exDiv ? table[3] = 1 : table[3] = -1;
      break;
    case 4:
      activePlayer === exDiv ? table[4] = 1 : table[4] = -1;
      break;
    case 5:
      activePlayer === exDiv ? table[5] = 1 : table[5] = -1;
      break;
    case 6:
      activePlayer === exDiv ? table[6] = 1 : table[6] = -1;
      break;
    case 7:
      activePlayer === exDiv ? table[7] = 1 : table[7] = -1;
      break;
    case 8:
      activePlayer === exDiv ? table[8] = 1 : table[8] = -1;
      break;
  }
}


const resetGame = () => {
  activePlayerBox.innerHTML = '';
  for (let i = 0; i < table.length; i++) {
    table[i] = 0;
  }
  cells.forEach(x => {
    x.innerHTML = '';
  })
  counter = 0;
}


cells.forEach(cell => {
  cell.addEventListener('click', _ => {
    counter++;
    if (cell.innerHTML === '') {
      if (activePlayer === exDiv) {
        cell.innerHTML = exDiv;
        addToMatrix(cell.id);
        if (checkIsWon()) {
          showWinner();
        }
        activePlayer = circle;
        showActivePlayer(activePlayer);
      } else {
        cell.innerHTML = circle;
        addToMatrix(cell.id);
        if (checkIsWon()) {
          showWinner();
        }
        activePlayer = exDiv;
        showActivePlayer(activePlayer);
      }

    }
    if (counter === 9){
      activePlayerBox.innerHTML = "Remis";
    }
  })
})
resetBtn.addEventListener('click', () => resetGame())








