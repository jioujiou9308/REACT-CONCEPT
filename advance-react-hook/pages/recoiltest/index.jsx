import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { counterState } from "../../components/recoil/counter";
import DisPlay from "../../components/DisPlay";
const Index = () => {
  const countValue = useRecoilValue(counterState);
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      {countValue}
      <DisPlay />
    </div>
  );
};

export default Index;

// const ComponentA = () => {
//   const [count, setCount] = useRecoilState(counterState);

//   return (
//     <div>
//       {" "}
//       <p>Current Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// };

// const ComponentB = () => {
//   return (
//     <div>
//       component b<ComponentC />
//     </div>
//   );
// };

// const ComponentC = () => {
//   const count = useRecoilValue(counterState);

//   return <div>count value{count}</div>;
// };
