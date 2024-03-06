import Button from "./Button";

export default function ResetMode({
  resetMana,
  resetLifeAndPoison,
  resetExtraMode,
  resetAll,
}) {
  return (
    <div className="h-80 flex column">
      <Button
        styles="btn btn-reset btn-tap w-100 flex center"
        onAction={resetMana}
      >
        <span className="xxs-text text">
          Reset <strong>Mana</strong>
        </span>
      </Button>
      <Button
        styles="btn btn-reset btn-tap w-100 flex center"
        onAction={resetLifeAndPoison}
      >
        <span className="xxs-text text">
          Reset <strong>Life & Infect</strong>
        </span>
      </Button>
      <Button
        styles="btn btn-reset btn-tap w-100 flex center"
        onAction={resetExtraMode}
      >
        <span className="xxs-text text">
          Reset <strong>Monarch & Initiative</strong>
        </span>
      </Button>
      <Button
        styles="btn btn-reset btn-tap w-100 flex center"
        onAction={resetAll}
      >
        <span className="xxs-text text">
          Reset <strong>All</strong>
        </span>
      </Button>
    </div>
  );
}
