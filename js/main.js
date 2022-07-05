/*----- constants -----*/
const BACKGROUND_LOOKUP = {
    '1': "url(images/pepperoni.png)",
    '-1': "url(images/olive.png)",
    'null': 'rgb(255, 221, 0, 0.873)',
}
const PLAYER_LOOKUP = {
    '1': "PEPPERONI",
    '-1': "OLIVE",
    'null': '',
}

const WINNING_COMBOS = [
    [([i][j]) + ([i][j+1]) + ([i][j+2]) + ([i][j+3])], // vertical win
    [([i][j]) + ([i+1][j]) + ([i+2][j]) + ([i+3][j])], // horizontal win
    [([i][j]) + ([i+1][j+1]) + ([i+2][j+2]) + ([i+3][j+3])], // diagonal up right win
    [([i][j]) + ([i-1][j+1]) + ([i-2][j+2]) + ([i-3][j+3])], // diagonal up left win
];

function getGameStatus() {
    for (let arr of WINNING_COMBOS) {
        while (i < WINNING_COMBOS.length) {
            if (Math.abs[i] === 4) return turn;
        }
    }
    if (!board.includes(null)) return 'T';
    return null;
    };

/*----- app's state (variables) -----*/

let board; // array of arrays
let turn; // 1 or -1 or null for unclaimed div
let gameStatus; // null -> game in play; 1/-1 player win, 'T' -> tie
// let ignoreClick; // Boolean

/*----- cached element references -----*/

const replayBtn = document.querySelector('button');
const chooserEls = [...document.querySelectorAll('#choosers > div')];
const messageEl = document.querySelectorAll('h1');

/*----- event listeners -----*/
document.getElementById('choosers').addEventListener('click', handleChoice);
replayBtn.addEventListener('click', init);


/*----- functions -----*/
init();
// initialize state, then call render.
function init() {
    board = [
      [null, null, null, null, null, null], // column 0
      [null, null, null, null, null, null], // column 1
      [null, null, null, null, null, null], // column 2
      [null, null, null, null, null, null], // column 3
      [null, null, null, null, null, null], // column 4
      [null, null, null, null, null, null], // column 5
      [null, null, null, null, null, null], // column 6
    ];
    turn = 1;
    render();

}

function render() {
    // iterate over column arrays
    board.forEach(function(columnArr, columnIdx) {  // columnIdx is also first digit in slot id
        columnArr.forEach(function(slotValue, rowIdx) { // slotValue is 1,-1, or null. Row Idx is also second digit in slot id
            const slotEl = document.getElementById(`${columnIdx}${rowIdx}`);
            slotEl.style.backgroundImage= BACKGROUND_LOOKUP[slotValue]; 
        })
    });
    renderChoosers();
    renderMessage();
    replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

// update all impacted state, then call render
function handleChoice(evt) {
    const columnIdx = chooserEls.indexOf(evt.target);
    if (columnIdx === -1) return; // if something other than a chooser is clicked
    const columnArr = board[columnIdx];
    const rowIdx = columnArr.indexOf(null); // claim the first "null" slot
    columnArr[rowIdx] = turn;
    turn *= -1; // switch turns
    gameStatus = getGameStatus;
    render();
}
// hide or show markers - hide if column does not have any "null" values
function renderChoosers() {
    chooserEls.forEach(function(chooserEl, columnIdx) {
        chooserEl.style.visibility = board[columnIdx].includes(null) ? "visible" : "hidden";
    });
}
// change message - display players' turn/win
function renderMessage() {
    if (gameStatus = null) {
        messageEl.innerHTML = `${PLAYER_LOOKUP[turn]}'s Turn`; // display player turn
    } else if (gameStatus === 'T') {
        // Tie game
        messageEl.textContent = 'a big pizza TIE!';
    } else {
        // player has won!
        messageEl.innerHTML = `${PLAYER_LOOKUP[turn]} Wins!`;
    }
}

// checkVertical = function(board) {
//     for(i = 0; i < board.length; i++){
//         for(j = 0; j < board[i].length; j++){
//             if (Math.abs(board[i][j] + board[i][j+1] + board[i][j+2] + board[i][j+3]) === 4)
//             return turn;
//             }
// }}

// checkHorizontal = function(board) {
//     for(i = 0; i < board.length; i++){
//         for(j = 0; j < board[i].length; j++){
//             if (Math.abs(board[i][j] + board[i+1][j] + board[i+2][j] + board[i+3][j]) === 4)
//             return turn;
//             }
// }}

// checkDiagonal = function(board) {
//     for(i = 0; i < board.length; i++){
//         for(j = 0; j < board[i].length; j++){
//             if (Math.abs(board[i][j] + board[i+1][j] + board[i+2][j] + board[i+3][j]) === 4)
//             return turn;
//             
