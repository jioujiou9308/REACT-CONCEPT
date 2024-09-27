import React, { useState, useCallback } from "react";

const ThrottleFirst = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((n) => n + 1);
  }
  function withThrottleFirst(callback, time) {
    let idThrottled = false;
    return () => {
      if (idThrottled) return;
      idThrottled = true;
      callback();
      setTimeout(() => {
        idThrottled = false;
      }, time);
    };
  }

  const handleClickThrottle = useCallback(withThrottleFirst(handleClick, 1000), []);

  return (
    <div className="flex flex-col border-4 w-[500px] items-center p-2">
      <h1>ThrottleFirst</h1>
      <p>
        throttle(節流)(執行第一次觸發版本): 第一次觸發時立刻執行 callback，並且在 n
        秒內忽視其他的觸發。
      </p>
      <div>count : {count}</div>
      <button
        onClick={() => {
          handleClickThrottle();
        }}
      >
        +1
      </button>
    </div>
  );
};

export default ThrottleFirst;
