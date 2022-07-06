/*----- constants -----*/
const BACKGROUND_LOOKUP = {
    '1': "url(images/pepperoni.png)",
    '-1': "url(images/olive.png)",
    'null': '',
}
const PLAYER_LOOKUP = {
    '1': "OLIVE",
    '-1': 'PEPPERONI',
}

function getGameStatus() {
    if (winner === -1) console.log("olive");
    // if (!board.includes(null)) return 'T';
    return null;
    };

/*----- app's state (variables) -----*/

let board; // array of arrays
let turn; // 1 or -1 or null for unclaimed div
let gameStatus; // null -> game in play; 1/-1 player win, 'T' -> tie
// let ignoreClick; // Boolean
let winner = null;
let player;
function checkWin() {};



/*----- cached element references -----*/

const replayBtn = document.querySelector('button');
const chooserEls = [...document.querySelectorAll('#choosers > div')];
const messageEl = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById('choosers').addEventListener('click', handleChoice);
// guard - if winner is true
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
    // ignoreClick = false;

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
    gameStatus = getGameStatus;
    renderMessage();
    // replayBtn.style.visibility = winner ? 'visible' : 'hidden';

}

// update all impacted state, then call render
function handleChoice(evt) {
    const columnIdx = chooserEls.indexOf(evt.target);
    console.log(evt.target, columnIdx);
    if (
        // columnIdx === -1 || 
        winner === true) return; // if something other than a chooser is clicked
        const columnArr = board[columnIdx];
        const rowIdx = columnArr.indexOf(null); // claim the first "null" slot
        columnArr[rowIdx] = turn;
        turn *= -1; // switch turns
        winner = checkWin(columnIdx, rowIdx);
        console.log (winner);
        // Guards
        

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
    }  else if 
    // player has won!
    (winner === -1) {
        messageEl.innerHTML = 'PEPPERONI Wins!';
    } else if (winner === null && !board.includes(null)) { 
        // Tie game
        messageEl.innerHTML = 'a big pizza TIE!';
}}


function checkVertWin(columnIdx, rowIdx, player) {
    let count = 1;
    rowIdx--;
    while(board[columnIdx][rowIdx] === player && rowIdx >= 0) {
        count++;
        rowIdx--;
    }
    console.log (count);
    return count === 4 ? winner = turn : null;
}

// function checkHorzLeftWin(columnIdx, rowIdx, player) {
//     let count = 0;
//     columnIdx--;
//     while(board[columnIdx][rowIdx] === player && columnIdx <= 6) {
//         count++;
//         columnIdx--;
//     }
//     console.log (count);
//     return count >= 4 ? winner = turn : null;
// }

                    
function checkWin(columnIdx, rowIdx) {
    const player = board[columnIdx][rowIdx];
    return checkVertWin(columnIdx, rowIdx, player)
    //  || 
    // checkHorzLeftWin(columnIdx, rowIdx, player) 
    // ||
    // checkDiaUpRightWin(columnIdx, rowIdx, player) ||
    // checkDiaUpLeftWin(columnIdx, rowIdx, player)
    };




// function checkHorzWin() {
//     let i = columnIdx; let j = rowIdx;
//     while(j < board[i].length) {
//     i++; j++;
//      if (((Math.abs([j]+[j+1]+[j+2]+[j+3])) >= 4) || Math.abs([j]+[j-1]+[j-2]+[j-3]) >= 4) {
//         return true;
//     } else { 
//         return false;
//     }
// }

