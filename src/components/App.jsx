import { useState } from "react";
import Player from "./Player";

export default function App() {
  const [monarchP1, setMonarchP1] = useState(false);
  const [monarchP2, setMonarchP2] = useState(false);

  const [initiativeP1, setInitiativeP1] = useState(false);
  const [initiativeP2, setInitiativeP2] = useState(false);

  function onMonarchP1() {
    setMonarchP1(true);
    setMonarchP2(false);
  }

  function onMonarchP2() {
    setMonarchP2(true);
    setMonarchP1(false);
  }

  function onInitiativeP1() {
    setInitiativeP1(true);
    setInitiativeP2(false);
  }

  function onInitiativeP2() {
    setInitiativeP2(true);
    setInitiativeP1(false);
  }

  function resetMonarchAndInitiative() {
    setMonarchP1(false);
    setMonarchP2(false);
    setInitiativeP1(false);
    setInitiativeP2(false);
  }

  return (
    <div className="app flex column">
      <Player
        player="player-180"
        monarch={monarchP2}
        onMonarch={onMonarchP2}
        initiative={initiativeP2}
        onInitiative={onInitiativeP2}
        resetMonarchAndInitiative={resetMonarchAndInitiative}
      />
      <Player
        monarch={monarchP1}
        onMonarch={onMonarchP1}
        initiative={initiativeP1}
        onInitiative={onInitiativeP1}
        resetMonarchAndInitiative={resetMonarchAndInitiative}
      />
    </div>
  );
}
