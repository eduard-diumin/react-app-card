import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { QuestionCardList } from "../../components/QuestionCardList";

export const HomePage = () => {
  const [cards, setCards] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const data = await response.json();
      console.log(data);
      setCards(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className={cls.homePage}>
      <QuestionCardList cards={cards} />
    </div>
  );
};
