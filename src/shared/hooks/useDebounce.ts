import { useRef } from "react";

type TimerRef = {
  current: ReturnType<typeof setTimeout> | null
}

export function useDebounce(callback, delay: number) {
  const timerId: TimerRef = useRef(null);

  return function (...args) {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = window.setTimeout(() => {
      return callback(...args);
    }, delay);
  }
}
