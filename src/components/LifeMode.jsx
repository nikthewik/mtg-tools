import Button from "./Button";
import LifeCounter from "./LifeCounter";

export default function LifeMode({
  life,
  setLife,
  modifier,
  setModifier,
  isVisible,
  setIsVisible,
}) {
  function handleNext() {
    if (life > 998) return;
    setIsVisible(true);
    setLife((life) => life + 1);
    setModifier((modifier) => modifier + 1);
  }

  function handlePrevious() {
    if (life < -98) return;
    setIsVisible(true);
    setLife((life) => life - 1);
    setModifier((modifier) => modifier - 1);
  }

  return (
    <div className="life-container flex-cc">
      <Button
        styles={`btn btn-abs btn-left btn-tap text`}
        onAction={handlePrevious}
      >
        -
      </Button>
      <LifeCounter life={life} modifier={modifier} isVisible={isVisible} />
      <Button
        styles={`btn btn-abs btn-right btn-tap text`}
        onAction={handleNext}
      >
        +
      </Button>
    </div>
  );
}
