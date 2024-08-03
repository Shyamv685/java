import { useEffect, useState } from "react";

export default function TrafficLight({ trafficStates }) {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];



    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <>
<h1>PLEASE FOLLOW THE TRAFFIC RULES :- </h1>

    <div className="traffic-light-container">
      {Object.keys(trafficStates).map((color) => (
        <div
          className="traffic-light"
          style={{
            backgroundColor:
              color === currentColor && trafficStates[color].backgroundColor
          }}
        />
      ))}

    </div>
<div className="rectangle"> 
    RECD
</div>

<div className="rectangle2"> 
    REC
</div>


    <div className="drive">
        <h2>PLEASE DRIVE SAFELY..</h2>
    </div>
    </>
  );
}
