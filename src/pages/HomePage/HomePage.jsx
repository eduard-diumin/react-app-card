import { useEffect, useMemo, useRef, useState } from "react";
import { API_URL } from "../../constants";
import cls from "./HomePage.module.css";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { SearchInput } from "../../components/SearchInput";
import { SortSelect } from "../../components/SortSelect";
import { Button } from "../../components/Button";

const DEFAULT_PER_PAGE = 10;

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState(
    `?_page=1&_per_page=${DEFAULT_PER_PAGE}`
  );
  const [cards, setCards] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const controlsContainerRef = useRef();

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const data = await response.json();
    setCards(data);
    return data;
  });

  useEffect(() => {
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchChangeHendler = (e) => {
    setSearchValue(e.target.value);
  };

  const cardsFiltered = useMemo(() => {
    if (cards?.data) {
      if (searchValue.trim()) {
        return cards.data.filter((card) =>
          card.question.toLowerCase().includes(searchValue.trim().toLowerCase())
        );
      } else {
        return cards.data;
      }
    }
    return [];
  }, [cards, searchValue]);

  const pagination = useMemo(() => {
    const totalCardsCount = cards?.pages || 0;

    return Array(totalCardsCount)
      .fill(0)
      .map((_, i) => i + 1);
  }, [cards]);

  const onSortSelectChangeHandler = (e) => {
    setSortValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${DEFAULT_PER_PAGE}&${e.target.value}`);
  };

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      const page = e.target.textContent;
      setSearchParams(
        `?_page=${page}&_per_page=${DEFAULT_PER_PAGE}&${sortValue}`
      );
      controlsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getActivePageNumber = () =>
    cards.next === null ? cards.last : cards.next - 1;

  return (
    <div className={cls.homePage}>
      <div className={cls.controlsContainer} ref={controlsContainerRef}>
        <SearchInput value={searchValue} onChange={onSearchChangeHendler} />
        <SortSelect value={sortValue} onChange={onSortSelectChangeHandler} />
      </div>

      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}

      <QuestionCardList cards={cardsFiltered} />

      {cardsFiltered.length === 0 ? (
        <h2 className={cls.noQuestions}>No Questions Found</h2>
      ) : (
        <div className={cls.paginationContainer} onClick={paginationHandler}>
          {pagination.map((value) => {
            return (
              <Button key={value} isActive={value === getActivePageNumber()}>
                {value}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};
