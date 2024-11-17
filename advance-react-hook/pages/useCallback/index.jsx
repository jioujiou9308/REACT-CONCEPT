import React, { useEffect, useCallback, useState } from "react";

const Index = () => {
  const [value, setValue] = useState(0);
  const [query, setQuery] = useState(1);

  //   without useCallback
//   async function fetchData() {
//     console.log("fetch data render");
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${query}`);
//     const data = await response.json();
//   }

    // with useCallback
    const fetchData = useCallback(async () => {
      console.log("fetchData function reference updated");
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${query}`);
      const data = await response.json();
    }, [query]);

  useEffect(() => {
    fetchData();
    console.log("useEffect render");
  }, [fetchData]);
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
    </div>
  );
};

export default Index;
