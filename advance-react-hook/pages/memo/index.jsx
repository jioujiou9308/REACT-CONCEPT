import React, { useState, useCallback } from "react";
import MemoizedChild from "./component/MemoizedChild";

const Index = () => {
  const [renderCount, setRenterCount] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  //   const childAlert = () => alert("child alert button");
  const childAlert = useCallback(async () => alert("child alert button"), []);

  return (
    <div>
      <div>Parent Message</div>
      <button onClick={() => setRenterCount((prev) => prev + 1)}>Render Button</button>
      render count : {renderCount}
      <br />
      <button onClick={() => setChildNumber((prev) => prev + 1)}>update children number</button>
      <br />
      <div>Children component </div>
      <MemoizedChild number={childNumber} alert={childAlert} />
    </div>
  );
};

export default Index;
