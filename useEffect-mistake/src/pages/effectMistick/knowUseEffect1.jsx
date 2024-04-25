import React, { useState, useEffect } from 'react';

const UpdateEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.count('useEffect runs!');
    document.title = `You click ${count} times`;
  }, [count]);

  console.count('component rendered');
  return (
    <div>
      <h3>You click ${count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <br />
      <input onChange={(e) => setName(e.target.value)} style={{ border: 'solid' }} />
      
    </div>
  );
};

export default UpdateEffect;

/*
1. component -> react
2. react  (render html) => browser
3.  browser (update dom )



 */
