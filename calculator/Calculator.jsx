import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(Function(`'use strict'; return (${input})`)().toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => handleClick(char)}
            className={["/", "*", "-", "+", "="].includes(char) ? "operator" : ""}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
