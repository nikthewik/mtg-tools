import { useState, useEffect } from "react";
import DiceMode from "./DiceMode";
import ManaMode from "./ManaMode";
import CounterMode from "./CounterMode";
import ResetMode from "./ResetMode";
import Menu from "./Menu";
import ExtraMode from "./ExtraMode";

export default function Player({
  player = "",
  monarch,
  onMonarch,
  initiative,
  onInitiative,
  resetMonarchAndInitiative,
}) {
  const [dice, setDice] = useState(1);
  const [life, setLife] = useState(20);
  const [poison, setPoison] = useState(0);

  const [modifier, setModifier] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState("life");
  const [isEqual, setIsEqual] = useState(false);

  const [blue, setBlue] = useState(0);
  const [black, setBlack] = useState(0);
  const [white, setWhite] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);

  const [isManaSelected, setIsManaSelected] = useState("");

  useEffect(() => {
    // Reset Modifier after 1,5 seconds...
    const timeoutId = setTimeout(resetModifier, 1500);

    // ...but only if the +/- buttons are not used, otherwise the timeout will be cleared.
    return () => {
      clearTimeout(timeoutId);
    };
  }, [modifier]);

  function resetDice() {
    setDice(1);
    setIsEqual(false);
  }

  function resetMana() {
    setBlue(0);
    setBlack(0);
    setWhite(0);
    setRed(0);
    setGreen(0);
    setIsManaSelected("");
    setIsSelected("mana");
  }

  function resetLifeAndPoison() {
    setLife(20);
    setPoison(0);
    resetModifier();
    setIsSelected("life");
  }

  function resetModifier() {
    setIsVisible(false);
    setModifier(0);
  }

  function resetExtraMode() {
    resetMonarchAndInitiative();
    setIsSelected("");
  }

  function resetAll() {
    resetDice();
    resetMana();
    resetLifeAndPoison();
    resetMonarchAndInitiative();
    setIsSelected("life");
  }

  return (
    <div className={`player-container flex column ${player}`}>
      {isSelected === "dice" && (
        <DiceMode
          dice={dice}
          setDice={setDice}
          isEqual={isEqual}
          setIsEqual={setIsEqual}
        />
      )}
      {isSelected === "mana" && (
        <ManaMode
          blue={blue}
          setBlue={setBlue}
          black={black}
          setBlack={setBlack}
          white={white}
          setWhite={setWhite}
          red={red}
          setRed={setRed}
          green={green}
          setGreen={setGreen}
          isManaSelected={isManaSelected}
          setIsManaSelected={setIsManaSelected}
        />
      )}
      {isSelected === "life" && (
        <CounterMode
          type="life"
          counter={life}
          setCounter={setLife}
          modifier={modifier}
          setModifier={setModifier}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      {isSelected === "poison" && (
        <CounterMode
          type="poison"
          counter={poison}
          setCounter={setPoison}
          modifier={modifier}
          setModifier={setModifier}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      {isSelected === "reset" && (
        <ResetMode
          resetMana={resetMana}
          resetLifeAndPoison={resetLifeAndPoison}
          resetExtraMode={resetExtraMode}
          resetAll={resetAll}
        />
      )}
      <Menu
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        resetModifier={resetModifier}
      />
      {isSelected === "" && (
        <ExtraMode
          monarch={monarch}
          onMonarch={onMonarch}
          initiative={initiative}
          onInitiative={onInitiative}
        />
      )}
    </div>
  );
}
