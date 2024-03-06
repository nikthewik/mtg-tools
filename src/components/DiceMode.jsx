import dice1 from "../assets/img/icon-dice-1.png";
import dice2 from "../assets/img/icon-dice-2.png";
import dice3 from "../assets/img/icon-dice-3.png";
import dice4 from "../assets/img/icon-dice-4.png";
import dice5 from "../assets/img/icon-dice-5.png";
import dice6 from "../assets/img/icon-dice-6.png";

import Button from "./Button";

export default function DiceMode({ dice, setDice, isEqual, setIsEqual }) {
  function rollDice() {
    const oldDice = dice;
    const randomNum = Math.floor(Math.random() * 6) + 1;
    randomNum === oldDice ? setIsEqual(true) : setIsEqual(false);
    setDice(randomNum);
  }

  return (
    <Button styles="btn btn-tap h-80 w-100 flex center" onAction={rollDice}>
      <div className="dice-container w-100 flex center relative">
        {isEqual && (
          <span className={`xxxs-text text absolute top`}>
            <i>Wow, another {dice}!</i>
          </span>
        )}
        {dice === 1 ? (
          <img className="dice-icon neon-effect" src={dice1} alt="dice 1" />
        ) : dice === 2 ? (
          <img className="dice-icon neon-effect" src={dice2} alt="dice 2" />
        ) : dice === 3 ? (
          <img className="dice-icon neon-effect" src={dice3} alt="dice 3" />
        ) : dice === 4 ? (
          <img className="dice-icon neon-effect" src={dice4} alt="dice 4" />
        ) : dice === 5 ? (
          <img className="dice-icon neon-effect" src={dice5} alt="dice 5" />
        ) : (
          <img className="dice-icon neon-effect" src={dice6} alt="dice 6" />
        )}
        <span className="xxs-text text absolute bottom">
          Tap to <strong>ROLL</strong>
        </span>
      </div>
    </Button>
  );
}
