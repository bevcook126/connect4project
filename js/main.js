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
// function checkVertical(columnIdx, rowIdx) {
// while (i < columnArr.length) {
//   [columnIdx, rowIdx++]
    
//     }
// }

// if (board[columnIdx, rowIdx],  )

// const WINNING_COMBOS = [
//     [board[columnIdx, rowIdx], board[columnIdx++, rowIdx++], board[columnIdx += 2, rowIdx += 2], board[columnIdx += 3, rowIdx += 3]], // diagonal win 1
//     [board[columnIdx, rowIdx], board[columnIdx--, rowIdx++], board[columnIdx -= 2, rowIdx += 2], board[columnIdx -=3, rowIdx +=3]], // diagonal win 2
//     [board[columnIdx, rowIdx], board[columnIdx, rowIdx++], board[columnIdx, rowIdx +=2], board[columnIdx, rowIdx +=3]], // vertical win
//     [board[columnIdx, rowIdx], board[collumnIdx++, rowIdx], board[collumnIdx += 2, rowIdx], board[collumnIdx += 3, rowIdx]] // horizontal win 
// ]
// // function getGameStatus() {
// // if (Math.abs(board[columnIdx][rowIdx] + board[columnIdx++][rowIdx++] + [columnIdx++][rowIdx++] + [columnIdx++][rowIdx++] === 4))  
// //     return turn; // diagonal win 1
// // } else if 
// //     (Math.abs(board[columnIdx][rowIdx] + board[columnIdx--][rowIdx++] + [columnIdx--][rowIdx++] + [columnIdx--][rowIdx++] === 4))
// //     return turn; // diagonal win 2
// // } else if 

// // }; // diagonal

// function getGameStatus() {
//     for (let arr of WINNING_COMBOS) {
//       if (Math.abs([arr[0]] + [arr[1]] + [arr[2]] + [arr[3]]) === 3) return turn;
//     }
//     if (!board.includes(null)) return 'T';
//     return null;
//   }

// function getGameStatus() {
//     for (let i = 0; i < ) {
//       if (Math.abs(board[arr[0]] + board[arr[1]] + board[arr[2]]) === 3) return turn;
//     }
//     if (!board.includes(null)) return 'T';
//     return null;
//   }
// }

// function getGameStatus() {
//     for (let i = 0; i < columnArr.length;) {
//         if (Math.abs(board[i][i] + board[i][i++] + board[i][i++] + board[i][i++]) === 4) return turn; // vertical win
//         if (Math.abs(board[i][i] + board[i++][i] + board[i++][i] + board[i++][i]) === 4) return turn; // horizontal win
//         if (Math.abs(board[i][i] + board[i++][i++] + board[i++][i++] + board[i++][i++]) === 4) return turn; // diagonal win up-left
//         if (Math.abs(board[i][i] + board[i--][i++] + board[i--][i++] + board[i--][i++]) === 4) return turn; // diagonal win up-right
//         // tie
//     }
// }

// function getGameStatus() {
// for(let i = 0; i < board.length; i++) {
//     for(let j = 0; j < board[i].length; i++) {
//         if (Math.abs((board[i][j]) + (board[i][j++]) + (board[i][j += 2]) + (board[i][j += 3])) === 4) return turn; // vertical win
//         // if (Math.abs(board[i][j] + board[i++][j] + board[i++][j] + board[i++][j]) === 4) {return turn}; // horizontal win
//         // if (Math.abs(board[i][j] + board[i++][j++] + board[i++][j++] + board[i++][j++]) === 4) {return turn}; // diagonal win up-left
//         // if (Math.abs(board[i][j] + board[i--][j++] + board[i--][j++] + board[i--][j++]) === 4) {return turn}; // diagonal win up-right
//     }
// }
// }

// function getGameStatus() {
//     for(let arr of board) {
//             if (Math.abs((board[columnIdx][rowIdx]) + (board[columnIdx][rowIdx++]) + (board[columnIdx][rowIdx += 2]) + (board[columnIdx][rowIdx += 3])) === 4) (console.log 'ok';); // vertical win
//             // if (Math.abs(board[i][j] + board[i++][j] + board[i++][j] + board[i++][j]) === 4) {return turn}; // horizontal win
//             // if (Math.abs(board[i][j] + board[i++][j++] + board[i++][j++] + board[i++][j++]) === 4) {return turn}; // diagonal win up-left
//             // if (Math.abs(board[i][j] + board[i--][j++] + board[i--][j++] + board[i--][j++]) === 4) {return turn}; // diagonal win up-right
//         }
//     }

// function checkVertical() {
//     if (board[columnIdx][rowIdx]
// }


function horizontalWinCheck(){
    for(var rowIdx=0;rowIdx<6;rowIdx++){
        for(var columnIdx =0; columnIdx<4;columnIdx++)
    
return turn;
}}; 

/*----- app's state (variables) -----*/

let board; // array of arrays
let turn; // 1 or -1 or null for unclaimed div
let gameStatus; // null -> game in play; 1/-1 player win, 'T' -> tie
// let ignoreClick; // Boolean

/*----- cached element references -----*/

// const slotEls = [...document.querySelectorAll('#board > #slot')];
// const msgEl = document.querySelector('h1');
// const replayBtn = document.getElementById('replay');
const chooserEls = [...document.querySelectorAll('#choosers > div')];
const messageEl = document.querySelectorAll('h1');

/*----- event listeners -----*/
document.getElementById('choosers').addEventListener('click', handleChoice);



/*----- functions -----*/
init();
// initiatlize state, then call render.
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
