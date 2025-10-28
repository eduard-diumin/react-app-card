import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
  const [cards, setCards] = useState([]);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const data = await response.json();
    setCards(data);
    return data;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  return (
    <div className={cls.homePage}>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <QuestionCardList cards={cards} />
    </div>
  );
};
