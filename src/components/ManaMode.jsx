import Button from "./Button";

export default function ManaMode() {
  return (
    <div className="mana-container flex-cc">
      <div className="mana-counter flex-cc">
        <Button styles={`btn btn-tap xxs-text text`} onAction={() => null}>
          -
        </Button>
        <Button styles={`btn btn-tap xxs-text text`} onAction={() => null}>
          -
        </Button>
        <Button styles={`btn btn-tap xxs-text text`} onAction={() => null}>
          -
        </Button>
        <Button styles={`btn btn-tap xxs-text text`} onAction={() => null}>
          -
        </Button>
      </div>
      <div className="mana-counter flex-cc">
        <div className="flex-cc">
          <Button
            styles={`btn-mana btn-tap xxs-text text`}
            onAction={() => null}
          >
            -
          </Button>
          <div className="btn-mana bg-u xxs-text text flex-cc">1</div>
          <Button
            styles={`btn-mana btn-tap xxs-text text`}
            onAction={() => null}
          >
            +
          </Button>
        </div>

        <div className="btn-mana bg-b xxs-text text flex-cc">2</div>
        <div className="btn-mana bg-w xxs-text flex-cc">3</div>
        <div className="btn-mana bg-r xxs-text text flex-cc">4</div>
        <div className="btn-mana bg-g xxs-text text flex-cc">5</div>
      </div>
      <div className="mana-counter flex-cc">
        <Button styles={`btn btn-tap text`} onAction={() => null}>
          +
        </Button>
        <Button styles={`btn btn-tap text`} onAction={() => null}>
          +
        </Button>
        <Button styles={`btn btn-tap text`} onAction={() => null}>
          +
        </Button>
        <Button styles={`btn btn-tap text`} onAction={() => null}>
          +
        </Button>
      </div>
    </div>
  );
}
