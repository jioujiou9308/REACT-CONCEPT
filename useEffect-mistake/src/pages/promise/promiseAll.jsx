import React from "react";

const promiseAll = () => {
  async function handler() {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/todos/2"),
      fetch("https://jsonplaceholder.typicode.com/todos/3"),
    ]);

    const [data1, { id: id2, title }, { id: id3, title: title2 }] = await Promise.all(
      responses.map((response) => response.json())
    );

    console.log("data2", id2, title, title2);
  }
  return (
    <div>
      <button onClick={handler}>按我</button>
    </div>
  );
};

export default promiseAll;
