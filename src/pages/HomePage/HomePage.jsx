import { useEffect, useState } from "react";
import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";

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
      {cards.map((card) => (
        <QuestionCard key={card.id} card={card} />
      ))}
    </div>
  );
};
