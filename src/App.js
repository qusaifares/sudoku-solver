import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const numbers = [
    [0, 6, 0, 3, 7, 8, 0, 0, 5],
    [0, 0, 4, 0, 0, 1, 9, 2, 0],
    [0, 8, 5, 4, 0, 0, 7, 0, 3],
    [0, 3, 0, 0, 0, 4, 0, 7, 0],
    [6, 4, 9, 2, 0, 7, 8, 0, 0],
    [0, 0, 7, 6, 0, 0, 0, 0, 0],
    [2, 0, 8, 7, 0, 5, 0, 9, 6],
    [4, 0, 0, 0, 0, 0, 0, 5, 0],
    [0, 5, 3, 1, 9, 0, 2, 0, 0]
  ];
  const findBox = (row, column) => {
    const boxCoordinates = ['1', '2', '3'];
    let boxRow = boxCoordinates[Math.floor(row / 3)];
    let boxColumn = boxCoordinates[Math.floor(column / 3)];
    return [boxRow, boxColumn];
  };

  const board = numbers.map((row, rowIndex) =>
    row.map((num, columnIndex) => {
      return {
        number: num,
        given: num ? true : false,
        row: rowIndex + 1,
        column: columnIndex + 1,
        box: findBox(rowIndex, columnIndex)
      };
    })
  );

  console.log(board);
  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
