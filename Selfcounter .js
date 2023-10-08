import * as React from "react";
import { useState, useEffect } from "react";

interface Props {
  name: string;
}

export default ({ name }: Props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     setCounter(counter + 1);
   }, 1000);

   return () => {
      clearInterval(interval);
   };
  });

  return <h1>{counter}</h1>;
};

