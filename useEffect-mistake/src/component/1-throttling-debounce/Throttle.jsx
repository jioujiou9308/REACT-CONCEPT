import React, { useState } from "react";

const Throttle = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((n) => n + 1);
  }
  const handleClickThrottle = withThrottle(handleClick, 1000);

  return (
    <div className="flex flex-col border-4 w-[500px] items-center p-2">
      <h1>Throttle</h1>
      <p>
        throttle(節流): 從第一次觸發開始，在 n 秒後執行 callback 函數。在第一次觸發到執行 callback
        其間，無論再觸發多少次都不會執行。
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

export default Throttle;

function withThrottle(callback, time) {
  let idThrottled = false;

  return () => {
    if (idThrottled) return;

    idThrottled = true;
    setTimeout(() => {
      idThrottled = false;
      callback();
    }, time);
  };
}

// function withThrottle(callback, time) {
//   let idThrottled = false;

//   function executeCallback() {
//     // 解除节流状态并执行回调
//     idThrottled = false;
//     callback();
//   }

//   function throttledFunction() {
//     if (idThrottled) return;

//     // 设置节流状态
//     idThrottled = true;
//     setTimeout(executeCallback, time);
//   }

//   return throttledFunction;
// }
