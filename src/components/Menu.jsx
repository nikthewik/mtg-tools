import iconDiceEmpty from "../assets/img/icon-dice-e.png";
import iconDiceFull from "../assets/img/icon-dice-f.png";
import iconManaEmpty from "../assets/img/icon-mana-e.png";
import iconManaFull from "../assets/img/icon-mana-f.png";
import iconLifeEmpty from "../assets/img/icon-life-e.png";
import iconLifeFull from "../assets/img/icon-life-f.png";
import iconPoisonEmpty from "../assets/img/icon-poison-e.png";
import iconPoisonFull from "../assets/img/icon-poison-f.png";
import iconResetEmpty from "../assets/img/icon-reset-e.png";
import iconResetFull from "../assets/img/icon-reset-f.png";

import Button from "./Button";

export default function Menu({ isSelected, setIsSelected, resetModifier }) {
  // DICE
  function onDice() {
    isSelected === "dice" ? setIsSelected("") : setIsSelected("dice");
  }

  // MANA
  function onMana() {
    isSelected === "mana" ? setIsSelected("") : setIsSelected("mana");
  }

  // LIFE
  function onLife() {
    isSelected === "life" ? setIsSelected("") : setIsSelected("life");
    resetModifier();
  }

  // POISON
  function onPoison() {
    isSelected === "poison" ? setIsSelected("") : setIsSelected("poison");
    resetModifier();
  }

  // RESET
  function onReset() {
    isSelected === "reset" ? setIsSelected("") : setIsSelected("reset");
  }

  return (
    <div className="menu flex">
      <Button
        styles={`btn btn-menu btn-tap-none h-100 flex center ${
          isSelected === "dice" && "btn-active"
        }`}
        onAction={onDice}
      >
        <img
          className="menu-icon neon-effect"
          src={isSelected === "dice" ? iconDiceFull : iconDiceEmpty}
          alt="dice"
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none h-100 flex center ${
          isSelected === "mana" && "btn-active"
        }`}
        onAction={onMana}
      >
        <img
          className="menu-icon neon-effect"
          src={isSelected === "mana" ? iconManaFull : iconManaEmpty}
          alt="mana"
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none h-100 flex center ${
          isSelected === "life" && "btn-active"
        }`}
        onAction={onLife}
      >
        <img
          className="menu-icon neon-effect"
          src={isSelected === "life" ? iconLifeFull : iconLifeEmpty}
          alt="life"
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none h-100 flex center ${
          isSelected === "poison" && "btn-active"
        }`}
        onAction={onPoison}
      >
        <img
          className="menu-icon neon-effect"
          src={isSelected === "poison" ? iconPoisonFull : iconPoisonEmpty}
          alt="infect"
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none h-100 flex center ${
          isSelected === "reset" && "btn-active"
        }`}
        onAction={onReset}
      >
        <img
          className="menu-icon neon-effect"
          src={isSelected === "reset" ? iconResetFull : iconResetEmpty}
          alt="reset"
        ></img>
      </Button>
    </div>
  );
}
