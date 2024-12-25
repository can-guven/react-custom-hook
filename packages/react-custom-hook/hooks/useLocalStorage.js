import { useEffect, useState } from "react";
import { isServer } from "../utils";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (isServer()) {
      return initialValue;
    }

    const item = localStorage.getItem(key);

    return item != null ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    if (!isServer()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
