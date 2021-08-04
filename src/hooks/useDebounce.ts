import { useCallback, useRef } from "react";

const DEFAULT_TIMEOUT = 300;

// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
export interface Debounce {
  (callback: (args: never) => unknown): unknown;
}

const useDebounce = (): Debounce => {
  const timeoutRef = useRef(0);

  return useCallback(
    (callback, timeout = DEFAULT_TIMEOUT) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(callback, timeout);
    },
    [timeoutRef],
  );
};

export default useDebounce;
