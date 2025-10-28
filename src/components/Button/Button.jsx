import cls from "./Button.module.css";

const isPrimary = true;

export const Button = ({ children, onClick }) => {
  return (
    <button
      className={`${cls.btn} ${isPrimary ? cls.primary : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
