import React, { createContext, useContext, useState, memo } from "react";

// 創建上下文
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  return (
    <AppContext.Provider value={{ count, setCount, name, setName }}>{children}</AppContext.Provider>
  );
};
const IntheCountera = memo(() => {
  console.log("in the counter a ");
  return (
    <div>
      {" "}
      counter a<IntheCounterb />
    </div>
  );
});

const IntheCounterb = memo(() => {
  console.log("in the counter b ");
  return <div>counter b</div>;
});
// 消費 count 值
const Counter = () => {
  const { count } = useContext(AppContext);
  console.log("Counter component re-rendered");
  return (
    <h1>
      Count: {count}
      <IntheCountera />
    </h1>
  );
};

// 消費 name 值
const NameDisplay = () => {
  const { name } = useContext(AppContext);
  console.log("NameDisplay component re-rendered");
  return <h1>Name: {name}</h1>;
};

// 按鈕用於更新狀態
const Buttons = () => {
  const { setCount, setName } = useContext(AppContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <button onClick={() => setName("Updated React")}>Update Name</button>
    </>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Counter />
      <NameDisplay />
      <Buttons />
    </AppProvider>
  );
};

export default App;
