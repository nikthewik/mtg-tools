import iconDiceEmpty from "../assets/img/icon-dice-e.png";
import iconDiceFull from "../assets/img/icon-dice-f.png";
import iconManaEmpty from "../assets/img/icon-mana-e.png";
import iconManaFull from "../assets/img/icon-mana-f.png";
import iconLifeEmpty from "../assets/img/icon-life-e.png";
import iconLifeFull from "../assets/img/icon-life-f.png";
import iconInfectEmpty from "../assets/img/icon-infect-e.png";
import iconInfectFull from "../assets/img/icon-infect-f.png";
import iconResetEmpty from "../assets/img/icon-reset-e.png";
import iconResetFull from "../assets/img/icon-reset-f.png";

import Button from "./Button";

export default function Menu({
  isDiceSelected,
  setIsDiceSelected,
  isManaSelected,
  setIsManaSelected,
  isLifeSelected,
  setIsLifeSelected,
  resetLife,
  resetModifier,
}) {
  // DICE
  function onDice() {
    clearSelections();
    setIsDiceSelected(!isDiceSelected);
  }

  // MANA
  function onMana() {
    clearSelections();
    setIsManaSelected(!isManaSelected);
  }

  // LIFE
  function onLife() {
    clearSelections();
    setIsLifeSelected(!isLifeSelected);
  }

  // RESET
  function resetAll() {
    resetLife();
    resetModifier();
  }

  function clearSelections() {
    setIsDiceSelected(false);
    setIsManaSelected(false);
    setIsLifeSelected(false);
  }
  return (
    <div className="menu">
      <Button
        styles={`btn btn-menu btn-tap-none flex-cc ${
          isDiceSelected && "btn-active"
        }`}
        onAction={onDice}
      >
        <img
          className="menu-icon"
          src={isDiceSelected ? iconDiceFull : iconDiceEmpty}
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none flex-cc ${
          isManaSelected && "btn-active"
        }`}
        onAction={onMana}
      >
        <img
          className="menu-icon"
          src={isManaSelected ? iconManaFull : iconManaEmpty}
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none flex-cc ${
          isLifeSelected && "btn-active"
        }`}
        onAction={onLife}
      >
        <img
          className="menu-icon"
          src={isLifeSelected ? iconLifeFull : iconLifeEmpty}
        ></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none flex-cc ${0 && "btn-active"}`}
        onAction={resetAll}
      >
        <img className="menu-icon" src={iconInfectFull}></img>
      </Button>

      <Button
        styles={`btn btn-menu btn-tap-none flex-cc ${0 && "btn-active"}`}
        onAction={resetAll}
      >
        <img className="menu-icon" src={iconResetEmpty}></img>
      </Button>
    </div>
  );
}
