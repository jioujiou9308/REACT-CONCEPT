import React, { useState, useMemo } from "react";
const index = () => {
  const [count, setCount] = useState(0);

  const memorize = useMemo(() => {
    return Math.random();
  }, []);
  console.time("go");
  const memorize2 = useMemo(() => {
    return Math.random();
  }, []);

  return (
    <div>
      <button
        className="bg-yellow-200"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default index;
