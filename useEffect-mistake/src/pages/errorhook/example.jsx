import React, { useState} from "react";
const HookUseRef = () => {
  const [counter, setCounter] = useState(0);
 
  
  // condition that may return early must be below all hooks
  if (counter > 0) {
    return <h2>Returning early</h2>;
  }
  
  const [color, setColor] = useState('salmon');
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>toggle loading</button>
      <h1>Hello world</h1>
    </div>
  );
}
export default HookUseRef;