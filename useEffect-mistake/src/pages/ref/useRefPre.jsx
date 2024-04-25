import React,{useEffect,useRef,useState} from 'react'

function usePrevious(value) {

    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


const UseRefPre = () => {

    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    return (
      <div >
        <p >Current count: {count}</p>
        <p>Previous count: {prevCount}</p>

        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    );
  }
export default UseRefPre