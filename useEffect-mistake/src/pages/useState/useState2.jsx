import { useState } from "react";
import React from 'react'

const UseState2 = () => {
    const [count,setCount] = useState(0)


    function adjustCount(amount) {
        setCount(currentCount=>{
            return currentCount + amount
        })
        setCount(currentCount=>{
            return currentCount + amount
        })
        // setCount(count +amount)
        // setCount(count +amount)
        console.log(count)
    }
  return (
    <div>
        <button onClick={()=>adjustCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={()=>adjustCount(1)}>+</button>
    </div>
  )
}

export default UseState2