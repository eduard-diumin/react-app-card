import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { SearchInput } from "../../components/SearchInput";
import { SortSelect } from "../../components/SortSelect";

export const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const data = await response.json();
    setCards(data);
    return data;
  });

  useEffect(() => {
    getQuestions(`react?${sortValue}`);
  }, [sortValue]);

  const onSearchChangeHendler = (e) => {
    setSearchValue(e.target.value);
  };

  const cardsFiltered = useMemo(() => {
    return cards.filter((card) =>
      card.question.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [cards, searchValue]);

  const onSortSelectChangeHandler = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <div className={cls.homePage}>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchChangeHendler} />
        <SortSelect value={sortValue} onChange={onSortSelectChangeHandler} />
      </div>

      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {cardsFiltered.length === 0 && (
        <h2 className={cls.noQuestions}>No Questions Found</h2>
      )}

      <QuestionCardList cards={cardsFiltered} />
    </div>
  );
};
