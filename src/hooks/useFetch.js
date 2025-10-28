import { useState } from "react";
import { delayFn } from "../helpers/delayFn";
import { API_URL } from "../constants";

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFn = async (agr) => {
    try {
      setIsLoading(true);
      setError("");
      await delayFn();

      const response = await callback(agr);

      return response;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchFn, isLoading, error];
};
