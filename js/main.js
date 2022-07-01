/*----- constants -----*/
const COLOR_LOOKUP = {
    '1': {'red'},
    '-1': {'black'},
    null: {'rgb(255, 221, 0)'}
}

function getGameStatus() {

}

/*----- app's state (variables) -----*/

// let board = getElementById = [];  // board[c][r]
// let turn; // 1 or -1
// let gameStatus; // null -> game in play; 1/-1 player win, 'T' -> tie
// let ignoreClick; // Boolean

/*----- cached element references -----*/

const slotEls = [...document.querySelectorAll('#board > #slot')];
const msgEl = document.querySelector('h1');
const replayBtn = document.getElementById('replay');


/*----- event listeners -----*/
document.getElementById('slot').addEventListener('click', handleMove);
replayBtn.addEventListener('click', init);

// hover -> turn semi-transparent
// click
// loop

/*----- functions -----*/
init();

function init() {
    board = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ];
    

}





