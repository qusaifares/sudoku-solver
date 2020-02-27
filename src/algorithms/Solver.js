const solve = board => {
  const choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // repeat for each row
  for (let i = 0; i < board.length; i++) {
    // loop through one row
    for (let j = 0; j < board[i].length; j++) {
      // check that cell is ungiven
      if (!board[i].given) {
        // for each ungiven cell, loop through choices and insert first valid number
        let choice;
        let k = 0;
        while (k < choices.length && !choice) {
          // check row
          // check column
          // check box
          k++;
        }
        // valid = not in row, column or box
        // if no valid solutions, go back and change last ungiven one
      }
    }
  }
};

const rowChecker = (board, row) => {
  for (let i = 0; i < board[row - 1].length; i++) {}
};

export default solve;
