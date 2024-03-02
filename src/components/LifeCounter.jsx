export default function LifeCounter({ life, modifier, isVisible }) {
  const isOutRange = life < -9 || life > 99;
  return (
    <div
      className={`life-counter flex-cc ${life <= 0 ? "dead" : "text"} ${
        isOutRange ? "s-text" : "n-text"
      }`}
    >
      {isVisible && (
        <span className="life-modifier">
          {modifier > 0 ? `+${modifier}` : modifier}
        </span>
      )}
      {life}
    </div>
  );
}
