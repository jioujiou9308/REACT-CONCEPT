import React, { useState } from "react";

const Throttle = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((n) => n + 1);
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="bg-pink-200 w-[200px] h-[300px]">123asdf</div>
        <div className="bg-yellow-200 w-[20px] h-[300px]">123asdf</div>
        <div className="w-[210px] bg-pink-500 h-[200px]">123</div>
        <div className="w-[200px] bg-blue-200 h-[200px]">123</div>
        <div className="bg-pink-200 w-[300px] h-[300px]">123asdf</div>
      </div>
      <div className="bg-yellow-200 w-[300px] h-[300px]">123asdf</div>
    </div>
  );
};

export default Throttle;
