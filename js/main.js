/*----- constants -----*/
const BACKGROUND_LOOKUP = {
    '1': {url('https://i.imgur.com/GfVAd6d.png');},
    '-1': {url('https://i.imgur.com/Jqp2LoD.png')},
    null: {'rgb(255, 221, 0)'},
}

function getGameStatus() {

}

/*----- app's state (variables) -----*/

let board;
let turn; // 1 or -1
let gameStatus; // null -> game in play; 1/-1 player win, 'T' -> tie
let ignoreClick; // Boolean

/*----- cached element references -----*/

const slotEls = [...document.querySelectorAll('#board > #slot')];
const msgEl = document.querySelector('h1');
const replayBtn = document.getElementById('replay');


/*----- event listeners -----*/
// click function -> iterative while loop w/ a variable to check all sides 
// of clicked slot. If neighboring slots are null (or not same value as player),
// loop stops. If any of them are the same as the player, the loop continues
// with 2 in a row and starts over at the 2nd slot, etc. until the loop
// stops or until there is 4 in a row, naming a winner.


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





