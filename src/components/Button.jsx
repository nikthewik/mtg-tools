export default function Button({ children, styles, onAction }) {
  return (
    <button className={`${styles} text`} onClick={onAction}>
      {children}
    </button>
  );
}
