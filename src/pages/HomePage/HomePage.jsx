import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { SearchInput } from "../../components/SearchInput";

export const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const data = await response.json();
    setCards(data);
    return data;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  const onSearchChangeHendler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={cls.homePage}>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchChangeHendler} />
      </div>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <QuestionCardList cards={cards} />
    </div>
  );
};
