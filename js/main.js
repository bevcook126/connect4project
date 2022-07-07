/*----- constants -----*/
const BACKGROUND_LOOKUP = {
    '1': "url(images/pepperoni.png)",
    '-1': "url(images/olive.png)",
    'null': '',
}
var tieAudio = new Audio('./audio/amore.mp3');
var pepperoniAudio = new Audio('./audio/pepperoni.mp3');
var oliveAudio = new Audio('./audio/olive.mp3');



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
    winner = null;
    renderChoosers();
    render();
    tieAudio.pause();
    tieAudio.currentTime = 0;
    pepperoniAudio.pause();
    pepperoniAudio.currentTime = 0;
    oliveAudio.pause();
    oliveAudio.currentTime = 0;
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

// update all impacted state, then call render
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
// hide or show markers - hide if column does not have any "null" values
function renderChoosers() {
    chooserEls.forEach(function(chooserEl, columnIdx) {
        chooserEl.style.visibility = board[columnIdx].includes(null) ? "visible" : "hidden";
        if (winner === -1 || winner === 1) {chooserEl.style.visibility = "hidden"};
    });
}
// change message - display players' turn/win
function renderMessage() {
    if (winner === null && turn === -1) {
        messageEl.innerHTML = "OLIVE's Turn"; // display player turn
    } else if (winner === null && turn === 1) {
        messageEl.innerHTML = "PEPPERONI's Turn"; // display player turn
    } else if 
    // player has won!
    (winner === 1) {
        messageEl.innerHTML = 'OLIVE Wins!';
        oliveAudio.play();
    }  else if 
    // player has won!
    (winner === -1) {
        messageEl.innerHTML = 'PEPPERONI Wins!';
        pepperoniAudio.play();
    } else if (winner === 'T') { 
        // Tie game
        messageEl.innerHTML = 'a big pizza TIE!';
        tieAudio.play();
    }
}

function checkWin(columnIdx, rowIdx) {
    const player = board[columnIdx][rowIdx];
    return checkVertWin(columnIdx, rowIdx, player) || 
    checkHorzWin(columnIdx, rowIdx, player) ||
    checkDiagWinLeft(columnIdx, rowIdx)||
    checkDiagWinRight(columnIdx, rowIdx) ||
    (board.flat().includes(null) ?null : 'T')
};

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
    let idx2 = columnIdx + 1; 
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

// function playAudio() {
    // var song = new Audio('./audio/amore.mp3');
    // if (winner !== null) {
    // song.play();
//     }
// }



