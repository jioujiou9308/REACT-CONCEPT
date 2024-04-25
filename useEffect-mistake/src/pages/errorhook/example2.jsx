import { useState } from 'react';

export default function MyComponent() {
  const [number, setNumber] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handleNextNumber() {
    setNumber(number + 1);
  }


  return (
      <>
      <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      <button onClick={handleNextNumber}>Next</button>
      <h3>{number + 1}</h3>
      {showMore && <p>Hello World!</p>}
    </>
  );
}