import { useEffect, useRef, useCallback } from "react";

// Based on https://gist.github.com/jaydenseric/a67cfb1b809b1b789daa17dfe6f83daa

export const useIsMounted = (): (() => boolean) => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return function cleanup(): void {
      isMounted.current = false;
    };
  }, []);
  const checker = useCallback((): boolean => {
    return isMounted.current;
  }, []);
  return checker;
};
