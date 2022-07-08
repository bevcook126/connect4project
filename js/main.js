/*----- constants -----*/
const BACKGROUND_LOOKUP = { // player tokens
    '1': "url(images/pepperoni.png)",
    '-1': "url(images/olive.png)",
    'null': '',
}
var audio = new Audio('./audio/amore.mp3');

/*----- app's state (variables) -----*/

let board; // array of arrays
let turn; // 1 or -1 or null for unclaimed div
let winner = null;
let player;
function checkWin() {};

/*----- cached element references -----*/

const replayBtn = document.querySelector('button');
const chooserEls = [...document.querySelectorAll('#choosers > div')];
const messageEl = document.querySelector('h1');

/*----- event listeners -----*/

document.getElementById('choosers').addEventListener('click', handleChoice);
replayBtn.addEventListener('click', init);

/*----- functions -----*/

init(); // initialize state, then call render.

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
    winner = null;
    renderChoosers();
    render();
    audio.pause();
    audio.currentTime = 0;
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
}

function handleChoice(evt) {
    const columnIdx = chooserEls.indexOf(evt.target);
    if (winner === true) return; // if something other than a chooser is clicked
        const columnArr = board[columnIdx];
        const rowIdx = columnArr.indexOf(null); // claim the first "null" slot
        columnArr[rowIdx] = turn;
        turn *= -1; // switch turns
        winner = checkWin(columnIdx, rowIdx);
        render();
}

function renderChoosers() {
    chooserEls.forEach(function(chooserEl, columnIdx) {
        chooserEl.style.visibility = board[columnIdx].includes(null) ? "visible" : "hidden";
        if (winner === -1 || winner === 1) {chooserEl.style.visibility = "hidden"};
    });
}

function renderMessage() {
    if (winner === null && turn === -1) {
        messageEl.innerHTML = "OLIVE's Turn"; // display player turn
        messageEl.style.color = "olive";
        messageEl.style.backgroundColor = "white";
        replayBtn.style.visibility = "hidden"
    } else if (winner === null && turn === 1) {
        messageEl.innerHTML = "PEPPERONI's Turn"; // display player turn
        messageEl.style.color = "red";
        messageEl.style.backgroundColor = "white";
        replayBtn.style.visibility = "hidden"
    } else if (winner === 1) {
        messageEl.innerHTML = 'OLIVE Wins!';
        messageEl.style.color = "white";
        messageEl.style.backgroundColor = "olive";
        replayBtn.style.visibility = "visible"
        audio.play();
    }  else if (winner === -1) {
        messageEl.innerHTML = 'PEPPERONI Wins!';
        messageEl.style.color = "white";
        messageEl.style.backgroundColor = "red";
        replayBtn.style.visibility = "visible"
        audio.play();
    } else if (winner === 'T') { // tie game
        messageEl.innerHTML = 'a big pizza TIE!';
        messageEl.style.color = "black";
        messageEl.style.backgroundColor = "gold";
        replayBtn.style.visibility = "visible"
        audio.play();
    }
}

function checkWin(columnIdx, rowIdx) {
    const player = board[columnIdx][rowIdx];
    return checkVertWin(columnIdx, rowIdx, player) || 
    checkHorzWin(columnIdx, rowIdx, player) ||
    checkDiagWinLeft(columnIdx, rowIdx)||
    checkDiagWinRight(columnIdx, rowIdx) ||
    (board.flat().includes(null) ?null : 'T')
}

function checkVertWin(columnIdx, rowIdx, player) {
    let count = 1;
    rowIdx--;
    while(board[columnIdx][rowIdx] === player && rowIdx >= 0) {
        count++;
        rowIdx--;
    }
    return count === 4 ? winner = turn : null;
}

function checkHorzWin(columnIdx, rowIdx, player) {
    let count = 1;
    let idx = columnIdx + 1;
    while((idx < board.length) && board[idx][rowIdx] === player) {
        count++;
        idx++;
    }
    idx = columnIdx - 1;
    while((idx >= 0) && board[idx][rowIdx] === player) {
        count++;
        idx--;
    }
    return count >= 4 ? winner = turn : null;
}
     
function checkDiagWinLeft(columnIdx, rowIdx) {
    const player = board[columnIdx][rowIdx];
    let count = 1;
    let idx1 = columnIdx - 1; 
    let idx2 = rowIdx + 1; 
    while (idx1 >= 0 && idx2 < board[0].length && board[idx1][idx2] === player) {
        count++; 
        idx1--;
        idx2++;
    }
    idx1 = columnIdx + 1; 
    idx2 = rowIdx - 1;  
    while (idx1 < board.length && idx2 >= 0 && board[idx1][idx2] === player) {
        count++;
        idx1++;
        idx2--; 
    }
    return count >= 4 ? winner = turn : null  
}

function checkDiagWinRight(columnIdx, rowIdx) {
    const player = board[columnIdx][rowIdx];
    let count = 1;
    let idx1 = columnIdx + 1; 
    let idx2 = rowIdx + 1;         
    while (idx1 < board.length && idx2 < board[0].length && board[idx1][idx2] === player) {
        count++; 
        idx1++;
        idx2++;
    }
    idx1 = columnIdx - 1; 
    idx2 = rowIdx - 1; 
    while (idx1 >= 0 && idx2 >= 0 && board[idx1][idx2] === player) {
        count++;
        idx1--;
        idx2--; 
    }
    return count >= 4 ? winner = turn : null  
}




