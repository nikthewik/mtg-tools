import Button from "./Button";

export default function ManaMode({
  blue,
  setBlue,
  black,
  setBlack,
  white,
  setWhite,
  red,
  setRed,
  green,
  setGreen,
  isManaSelected,
  setIsManaSelected,
}) {
  // BLUE
  function onManaBlue() {
    isManaSelected === "blue"
      ? setIsManaSelected("")
      : setIsManaSelected("blue");
  }

  // BLACK
  function onManaBlack() {
    isManaSelected === "black"
      ? setIsManaSelected("")
      : setIsManaSelected("black");
  }

  // WHITE
  function onManaWhite() {
    isManaSelected === "white"
      ? setIsManaSelected("")
      : setIsManaSelected("white");
  }

  // RED
  function onManaRed() {
    isManaSelected === "red" ? setIsManaSelected("") : setIsManaSelected("red");
  }

  // GREEN
  function onManaGreen() {
    isManaSelected === "green"
      ? setIsManaSelected("")
      : setIsManaSelected("green");
  }

  function onManaBtn(e) {
    if (isManaSelected === "") return;

    const operator = e.target.innerHTML;
    const num = +(operator + 1);

    if (isManaSelected === "blue") {
      if (num < 0 && blue === 0) return;
      setBlue((blue) => blue + num);
    }
    if (isManaSelected === "black") {
      if (num < 0 && black === 0) return;
      setBlack((black) => black + num);
    }
    if (isManaSelected === "white") {
      if (num < 0 && white === 0) return;
      setWhite((white) => white + num);
    }
    if (isManaSelected === "red") {
      if (num < 0 && red === 0) return;
      setRed((red) => red + num);
    }
    if (isManaSelected === "green") {
      if (num < 0 && green === 0) return;
      setGreen((green) => green + num);
    }
  }

  return (
    <div className="h-80 flex center">
      <Button
        styles={`btn btn-counter btn-tap text absolute left`}
        onAction={(e) => onManaBtn(e)}
      >
        -
      </Button>
      <div className="h-100 counter flex center column">
        <div
          className={`btn-mana neon-effect w-100 xxs-text text flex center ${
            isManaSelected === "blue" ? "bg-u-selected" : "bg-u"
          }`}
          onClick={onManaBlue}
        >
          U:&nbsp; <strong>{blue}</strong>
        </div>
        <div
          className={`btn-mana neon-effect w-100 xxs-text text flex center ${
            isManaSelected === "black" ? "bg-b-selected" : "bg-b"
          }`}
          onClick={onManaBlack}
        >
          B:&nbsp; <strong>{black}</strong>
        </div>
        <div
          className={`btn-mana neon-effect w-100 xxs-text flex center ${
            isManaSelected === "white" ? "bg-w-selected" : "bg-w text"
          }`}
          onClick={onManaWhite}
        >
          W:&nbsp; <strong>{white}</strong>
        </div>
        <div
          className={`btn-mana neon-effect w-100 xxs-text text flex center ${
            isManaSelected === "red" ? "bg-r-selected" : "bg-r"
          }`}
          onClick={onManaRed}
        >
          R:&nbsp; <strong>{red}</strong>
        </div>
        <div
          className={`btn-mana neon-effect w-100 xxs-text text flex center ${
            isManaSelected === "green" ? "bg-g-selected" : "bg-g"
          }`}
          onClick={onManaGreen}
        >
          G:&nbsp; <strong>{green}</strong>
        </div>
      </div>
      <Button
        styles={`btn btn-counter btn-tap text absolute right`}
        onAction={(e) => onManaBtn(e)}
      >
        +
      </Button>
    </div>
  );
}
