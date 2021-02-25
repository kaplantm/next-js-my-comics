import { useEffect, useState, useRef } from "react";

function useDate(daysToAdd: number) {
  const date = new Date();
  // Using ref instead of state - just like a component, updating state every run will cause a infinite loop
  const timesRunRef = useRef(0);
  timesRunRef.current += 1;
  const [show, setShow] = useState(false);
  date.setDate(date.getDate() + daysToAdd);

  // Uncomment this useEffect to observe how hook internal state updates cause the hook to run again
  // And causes the component implementing this hook to rerender
  // useEffect(
  //   () => {
  //     let timer1 = setTimeout(() => setShow(true), 3 * 1000);

  //     // this will clear Timeout
  //     // when component unmount like in willComponentUnmount
  //     // and show will not change to true
  //     return () => {
  //       clearTimeout(timer1);
  //     };
  //   },
  //   // useEffect will run only one time with empty []
  //   // if you pass a value to array,
  //   // like this - [data]
  //   // than clearTimeout will run every time
  //   // this value changes (useEffect re-run)
  //   []
  // );

  // Months are zero indexed but days and years aren't just to keep us on our toes
  return {
    date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
    timesRun: timesRunRef.current,
  };
}

export default useDate;
