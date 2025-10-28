import cls from "./Button.module.css";

export const Button = ({ children, onClick, isActive, isDisabled }) => {
  return (
    <button
      className={`${cls.btn} ${isActive ? cls.active : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
