import styles from "./Button.module.css";

interface Props {
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ color = "primary", onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      My Button
    </button>
  );
};

export default Button;
