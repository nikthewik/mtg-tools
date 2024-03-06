export default function Counter({ type, counter, modifier, isVisible }) {
  const isLife = counter <= 0;
  const isPoison = counter > 9;
  const isOutRange = counter < -9 || counter > 99;

  return (
    <div
      className={`counter flex center relative ${
        type === "life" && isLife
          ? isLife && "dead"
          : type === "poison" && isPoison
          ? "dead"
          : "text"
      } ${isOutRange ? "l-text" : "xl-text"}`}
    >
      {isVisible && (
        <span className="modifier absolute">
          {modifier > 0 ? `+${modifier}` : modifier}
        </span>
      )}
      {counter}
    </div>
  );
}
