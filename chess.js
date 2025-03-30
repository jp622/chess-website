// chess.js

// Initialize the chessboard state
let board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Piece symbols mapping
const pieceSymbols = {
    'P': '🟦',  // White Pawn
    'N': '🐴',  // White Knight
    'B': '🔮',  // White Bishop
    'R': '🏰',  // White Rook
    'Q': '👑',  // White Queen
    'K': '🤴',  // White King
    'p': '🟥',  // Black Pawn
    'n': '🐴',  // Black Knight
    'b': '⚫',  // Black Bishop
    'r': '🏰',  // Black Rook
    'q': '👑',  // Black Queen
    'k': '🤴'   // Black King
};

// Create the chessboard on the webpage
function createBoard() {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = '';

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            square.setAttribute('data-row', row);
            square.setAttribute('data-col', col);
            square.onclick = () => onSquareClick(row, col);
            updateSquare(square, row, col);
            chessboard.appendChild(square);
        }
    }
}

// Update the piece on a square
function updateSquare(square, row, col) {
    const piece = board[row][col];
    if (piece !== ' ') {
        square.innerHTML = `<span class="piece">${pieceSymbols[piece]}</span>`;
    } else {
        square.innerHTML = '';
    }
}

// Handle square click
let moveFrom = null;

function onSquareClick(row, col) {
    const square = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
    if (moveFrom === null) {
        // Select a piece
        const piece = board[row][col];
        if (piece !== ' ') {
            moveFrom = { row, col };
            square.classList.add('selected');
        }
    } else {
        // Make a move
        const moveTo = { row, col };
        if (isValidMove(moveFrom, moveTo)) {
            board[moveTo.row][moveTo.col] = board[moveFrom.row][moveFrom.col];
            board[moveFrom.row][moveFrom.col] = ' ';
            createBoard();
            moveFrom = null;
        } else {
            alert('Invalid move!');
            moveFrom = null;
        }
    }
}

// Validate if a move is legal (basic check, can be expanded)
function isValidMove(from, to) {
    // For simplicity, assume all moves are valid. This is a placeholder.
    return true;
}

// Initialize the game
createBoard();
