import { useEffect, useState } from "react";
import Player from "./Player";

export default function App() {
  // PLAYER 1
  const [isDiceSelectedP1, setIsDiceSelectedP1] = useState(false);
  const [diceP1, setDiceP1] = useState(1);
  const [isLifeSelectedP1, setIsLifeSelectedP1] = useState(true);
  const [lifeP1, setLifeP1] = useState(20);
  const [modifierP1, setModifierP1] = useState(0);
  const [isVisibleP1, setIsVisibleP1] = useState(false);
  const [isManaSelectedP1, setIsManaSelectedP1] = useState(false);

  // PLAYER 2
  const [isDiceSelectedP2, setIsDiceSelectedP2] = useState(false);
  const [diceP2, setDiceP2] = useState(1);
  const [isLifeSelectedP2, setIsLifeSelectedP2] = useState(true);
  const [lifeP2, setLifeP2] = useState(20);
  const [modifierP2, setModifierP2] = useState(0);
  const [isVisibleP2, setIsVisibleP2] = useState(false);
  const [isManaSelectedP2, setIsManaSelectedP2] = useState(false);

  useEffect(() => {
    // Reset Modifier after 1,5 seconds...
    const timeoutId = setTimeout(resetModifierP1, 1500);

    // ...but only if the +/- buttons are not used, otherwise the timeout will be cleared.
    return () => {
      clearTimeout(timeoutId);
    };
  });

  useEffect(() => {
    // Reset Modifier after 1,5 seconds...
    const timeoutId = setTimeout(resetModifierP2, 1500);

    // ...but only if the +/- buttons are not used, otherwise the timeout will be cleared.
    return () => {
      clearTimeout(timeoutId);
    };
  });

  function resetModifierP1() {
    // Reset Modifier for P1
    setIsVisibleP1(false);
    setModifierP1(0);
  }

  function resetModifierP2() {
    // Reset Modifier for P2
    setIsVisibleP2(false);
    setModifierP2(0);
  }

  function resetLifeP1() {
    setLifeP1(20);
  }

  function resetLifeP2() {
    setLifeP2(20);
  }

  return (
    <div className="app">
      <Player
        player="player2"
        life={lifeP2}
        setLife={setLifeP2}
        modifier={modifierP2}
        setModifier={setModifierP2}
        isVisible={isVisibleP2}
        setIsVisible={setIsVisibleP2}
        resetModifier={resetModifierP2}
        resetLife={resetLifeP2}
        isLifeSelected={isLifeSelectedP2}
        setIsLifeSelected={setIsLifeSelectedP2}
        isDiceSelected={isDiceSelectedP2}
        setIsDiceSelected={setIsDiceSelectedP2}
        dice={diceP2}
        setDice={setDiceP2}
        isManaSelected={isManaSelectedP2}
        setIsManaSelected={setIsManaSelectedP2}
      />
      <Player
        player="player1"
        life={lifeP1}
        setLife={setLifeP1}
        modifier={modifierP1}
        setModifier={setModifierP1}
        isVisible={isVisibleP1}
        setIsVisible={setIsVisibleP1}
        resetModifier={resetModifierP1}
        resetLife={resetLifeP1}
        isLifeSelected={isLifeSelectedP1}
        setIsLifeSelected={setIsLifeSelectedP1}
        isDiceSelected={isDiceSelectedP1}
        setIsDiceSelected={setIsDiceSelectedP1}
        dice={diceP1}
        setDice={setDiceP1}
        isManaSelected={isManaSelectedP1}
        setIsManaSelected={setIsManaSelectedP1}
      />
    </div>
  );
}
