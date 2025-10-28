import { Button } from "../Button";
import cls from "./Header.module.css";
import reactLogo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={reactLogo} alt="react logo" />
        <span>React Q&A</span>
      </p>
      <div className={cls.headerBtns}>
        <Button onClick={() => navigate("/addquestion")}>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};
