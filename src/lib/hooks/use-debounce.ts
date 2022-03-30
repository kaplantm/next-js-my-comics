import { useEffect, useState } from 'react';

// constantInteractionLag - if the user is constantly interacting, wait constantInteractionLag milliseconds after
// the delay value and update the debouncedValue
// this allows the user to constantly interact and still see updates

/**
 * @param constantInteractionLag if the user is constantly interacting, wait constantInteractionLag milliseconds after
 *  the delay value and update the debouncedValue this allows the user to constantly interact and still see updates
 * @param initialDelay shorten the initial delay for falsy initial values so we seem more responsive
 */
function useDebounce<T>(
  value: T,
  delay = 500,
  constantInteractionLag = 500,
  initialDelay = 0
): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date().getTime());
  const lagDif = delay + constantInteractionLag;
  const shouldDoLagUpdate =
    constantInteractionLag && new Date().getTime() - lastUpdateTime > lagDif;
  const computedDelay =
    initialDelay !== undefined && !debouncedValue ? initialDelay : delay;

  useEffect(() => {
    if (shouldDoLagUpdate) {
      setLastUpdateTime(new Date().getTime());
      setDebouncedValue(value);
    }
  }, [shouldDoLagUpdate, value]);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, computedDelay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, computedDelay, initialDelay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

export default useDebounce;
