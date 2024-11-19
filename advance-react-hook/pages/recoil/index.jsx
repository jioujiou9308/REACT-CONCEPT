import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../../components/recoil/counter";
import Input from "../../components/Input";
import Link from "next/link";
const Index = () => {
  const [isInitial, setIsInitial] = useState(true);

  const [countValue, setCount] = useRecoilState(counterState);
  useEffect(() => {
    setIsInitial(false);
  }, []);
  return (
    <div>
      {" "}
      <p>Current Count: {isInitial ? 0 : countValue}</p>
      <button onClick={() => setCount(countValue + 1)}>Increase</button>
      <button onClick={() => setCount(countValue - 1)}>Decrease</button>
      <Input />
      <Link href={"/recoiltest"}> go to </Link>
    </div>
  );
};

export default Index;
