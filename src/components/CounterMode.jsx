import Button from "./Button";
import Counter from "./Counter";

export default function CounterMode({
  type,
  counter,
  setCounter,
  modifier,
  setModifier,
  isVisible,
  setIsVisible,
}) {
  function onNext() {
    if (counter > 998) return;
    setIsVisible(true);
    setCounter((counter) => counter + 1);
    setModifier((modifier) => modifier + 1);
  }

  function onPrevious() {
    if (type === "life" && counter < -98) return;
    if (type === "poison" && counter === 0) return;
    setIsVisible(true);
    setCounter((counter) => counter - 1);
    setModifier((modifier) => modifier - 1);
  }

  return (
    <div className="h-80 flex center">
      <Button
        styles={`btn btn-counter btn-tap text absolute left`}
        onAction={onPrevious}
      >
        -
      </Button>
      <Counter
        type={type}
        counter={counter}
        modifier={modifier}
        isVisible={isVisible}
      />
      <Button
        styles={`btn btn-counter btn-tap text absolute right`}
        onAction={onNext}
      >
        +
      </Button>
    </div>
  );
}
