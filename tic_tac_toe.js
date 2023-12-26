
// gameboard Object
const Gameboard = {

    gameboard: ["", "", "", "", "", "", "", "", ""],
    displayBoard: function () {
        console.log(`
        ${this.gameboard[0]} | ${this.gameboard[1]} | ${this.gameboard[2]}
        ---------
        ${this.gameboard[3]} | ${this.gameboard[4]} | ${this.gameboard[5]}
        ---------
        ${this.gameboard[6]} | ${this.gameboard[7]} | ${this.gameboard[8]}
      `);
    },
    makeMove: function (index, symbol) {
        if (this.gameboard[index] === "") {
            this.gameboard[index] = symbol;
            return true;
        } else {
            return false;
        }
    },
    checkWinner: function () {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.gameboard[a] && this.gameboard[a] === this.gameboard[b] && this.gameboard[a] === this.gameboard[c]) {
                return true;
            }
        }
        return false;
    },


    isBoardFull: function () {
        return !this.gameboard.includes("");
    }
};



const Player1 = {
    name: "Player O",
    symbol: "O"
}

const Player2 = {
    name: "Player X",
    symbol: "X"
}




const game_flow = {
    currentPlayer: Player1,
    cell_choice: function (index) {
        const isValidMove = Gameboard.makeMove(index, this.currentPlayer.symbol);
        if (isValidMove) {
            Gameboard.displayBoard();

            if (Gameboard.checkWinner()) {
                console.log(`${this.currentPlayer.name} wins!`);
                return true; // Game over
            } else if (Gameboard.isBoardFull()) {
                console.log("It's a draw!");
                return true; // Game over
            } else {
                this.player_change();
                return false; // Continue playing
            }
        } else {
            console.log('Invalid move. Try again.');
            return false; // Invalid move, continue playing
        }
    },


    player_change: function () {
        //when he clicks 
        this.currentPlayer = (this.currentPlayer === Player1) ? Player2 : Player1;
    },

}

game_flow.cell_choice(4); // Player O makes a move
game_flow.cell_choice(0);