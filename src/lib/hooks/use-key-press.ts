import { useEffect, useState } from "react";

function useKeyPress(targetKeys: string[]) {
  // State for keeping track of whether key is pressed
  const [keysPressed, setKeysPressed] = useState<{
    [key: string]: boolean;
  }>(
    targetKeys.reduce(
      (acc, key) => {
        acc[key] = false;
        return acc;
      },
      {} as {
        string: boolean;
      }
    )
  );

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (targetKeys.includes(key)) {
      setKeysPressed({ ...keysPressed, [key]: true });
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (targetKeys.includes(key)) {
      setKeysPressed({ ...keysPressed, [key]: false });
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keysPressed;
}

export default useKeyPress;
