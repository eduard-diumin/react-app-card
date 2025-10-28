import { Button } from "../Button";
import cls from "./Header.module.css";
import reactLogo from "../../assets/react.svg";

export const Header = () => {
  return (
    <header className={cls.header}>
      <p>
        <img src={reactLogo} alt="react logo" />
        <span>React Q&A</span>
      </p>
      <div className={cls.headerBtns}>
        <Button>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};
