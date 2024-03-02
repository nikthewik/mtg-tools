import { useState } from "react";
import Button from "./Button";

export default function DiceMode({ dice, setDice }) {
  const [isEqual, setIsEqual] = useState(false);

  function rollDice() {
    const oldDice = dice;
    const randomNum = Math.floor(Math.random() * 6) + 1;
    randomNum === oldDice ? setIsEqual(true) : setIsEqual(false);
    setDice(randomNum);
  }

  return (
    <div className="dice-container flex-cc n-text text">
      {isEqual && (
        <span className={`tip-text xxxs-text text`}>Same dice rolled!</span>
      )}
      {dice === 1
        ? "⚀"
        : dice === 2
        ? "⚁"
        : dice === 3
        ? "⚂"
        : dice === 4
        ? "⚃"
        : dice === 5
        ? "⚄"
        : "⚅"}

      <Button styles="btn btn-roll btn-tap" onAction={rollDice}>
        <span className="dice-text xxs-text text">Tap to ROLL</span>
      </Button>
    </div>
  );
}
