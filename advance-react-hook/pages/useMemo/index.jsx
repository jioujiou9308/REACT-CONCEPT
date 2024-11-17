import React, { useState, useMemo, memo } from "react";
import MemorizedChild from "./component/MemoizedChild";
const Index = () => {
  const [value, setValue] = useState(0);

  function generateArray() {
    return [1, 2, 3, 4];
  }

  const arrayNumbers = useMemo(() => generateArray(), []);

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <MemorizedChild arrayNumbers={arrayNumbers} />
    </div>
  );
};
export default Index;
