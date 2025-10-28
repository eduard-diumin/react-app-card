import { Button } from "../Button";
import cls from "./QuestionCard.module.css";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>Level:1</div>
        <div>Not Completed</div>
      </div>
      <h5 className={cls.cardTitle}>What is JSX</h5>
      <div className={cls.cardAnswers}>
        <span>short answer:</span>
        <p className={cls.cardAnswer}>
          JSX is a syntax extension for JavaScript that looks similar to XML or
          HTML.
        </p>
      </div>
      <Button onClick={() => console.log("Show Answer Clicked")}>
        Show Answer
      </Button>
    </div>
  );
};
