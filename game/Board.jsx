import React from "react";
import Square from "./Square";
import "./Board.css";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {[0, 3, 6].map((row) => (
        <div className="board-row" key={row}>
          <Square value={board[row]} onClick={() => onClick(row)} />
          <Square value={board[row + 1]} onClick={() => onClick(row + 1)} />
          <Square value={board[row + 2]} onClick={() => onClick(row + 2)} />
        </div>
      ))}
    </div>
  );
}

export default Board;
