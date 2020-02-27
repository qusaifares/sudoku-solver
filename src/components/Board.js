import React, { useState } from 'react';

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => {
        return row.map((cell, index) => (
          <div
            key={index}
            className={`cell column-${index + 1} row-${rowIndex + 1} ${
              cell.number ? 'given' : 'to-solve'
            }`}
          >
            {cell.number ? cell.number : ''}
          </div>
        ));
      })}
    </div>
  );
};

export default Board;
