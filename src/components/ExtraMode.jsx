import Button from "./Button";

export default function ExtraMode({
  monarch,
  onMonarch,
  initiative,
  onInitiative,
}) {
  return (
    <div className="extra-mode h-80 flex center column relative">
      <Button
        styles={"btn btn-extra btn-tap neon-effect xxs-text text"}
        onAction={onMonarch}
      >
        Monarch:&nbsp;
        <span className={monarch ? "dead" : "text"}>
          <strong>{monarch ? "YES" : "NO"}</strong>
        </span>
      </Button>
      <Button
        styles={"btn btn-extra btn-tap neon-effect xxs-text text"}
        onAction={onInitiative}
      >
        Initiative:&nbsp;
        <span className={initiative ? "dead" : "text"}>
          <strong>{initiative ? "YES" : "NO"}</strong>
        </span>
      </Button>
      <div className="flex center absolute bottom-3 xxxs-text text">
        Made by&nbsp;<strong>nikthewik</strong>.
      </div>
    </div>
  );
}
