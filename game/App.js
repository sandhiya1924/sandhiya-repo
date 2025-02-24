import React, { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="App">
      <h1>XOX - GAME</h1>
      <Board board={board} onClick={handleClick} />
      <p className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
      </p>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return "X" or "O" as the winner
    }
  }
  return null;
}

export default App;



