import React, { useState } from "react";

const Debounce = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((n) => n + 1);
  }

  const handleDebounce = handleWithDebounce(handleClick, 1000);
  return (
    <div className="flex flex-col border-4 w-[500px] items-center p-2">
      <h1>Debounce</h1>
      <p>
        debounce(防抖): 在 n
        秒內多次觸發，只會執行最後一次觸發，中間其餘的觸發都會被後續的觸發蓋掉。並且最後一次觸發會在
        n 秒後執行。
      </p>
      <div>count : {count}</div>
      <button
        onClick={() => {
          handleDebounce();
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Debounce;

function handleWithDebounce(callback, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, time);
  };
}
