import { useEffect, useState } from "react";

export default function useDebounce(initValue = "", delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(initValue);
  useEffect(() => {
    const timmer = setTimeout(() => {
      setDebouncedValue(initValue);
    }, delay);
    return () => {
      clearTimeout(timmer);
    };
  }, [initValue, delay]);
  return debouncedValue;
}
