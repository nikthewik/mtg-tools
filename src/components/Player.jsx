import Button from "./Button";
import DiceMode from "./DiceMode";
import ManaMode from "./ManaMode";
import LifeMode from "./LifeMode";
import Menu from "./Menu";

export default function Player({
  player,
  life,
  setLife,
  modifier,
  setModifier,
  isVisible,
  setIsVisible,
  resetLife,
  resetModifier,
  isDiceSelected,
  setIsDiceSelected,
  dice,
  setDice,
  isLifeSelected,
  setIsLifeSelected,
  isManaSelected,
  setIsManaSelected,
}) {
  return (
    <div className={`player-container ${player}`}>
      {isDiceSelected && <DiceMode dice={dice} setDice={setDice} />}
      {isManaSelected && <ManaMode />}
      {isLifeSelected && (
        <LifeMode
          player={player}
          life={life}
          setLife={setLife}
          modifier={modifier}
          setModifier={setModifier}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <Menu
        isDiceSelected={isDiceSelected}
        isManaSelected={isManaSelected}
        isLifeSelected={isLifeSelected}
        setIsDiceSelected={setIsDiceSelected}
        setIsManaSelected={setIsManaSelected}
        setIsLifeSelected={setIsLifeSelected}
        resetLife={resetLife}
        resetModifier={resetModifier}
      />
    </div>
  );
}
