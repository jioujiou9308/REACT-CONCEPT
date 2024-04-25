import React from 'react'

const Recursion = () => {

    const  test  = [1,2,3,4,5]
    test.forEach((number,index)=> test[index] = number +2)
    console.log(test);
    // const countdown = (value,fn)=>{
    //     fn(value);
    //     return value>0 ? countdown(value-1,fn) : value;
    // }
    // countdown(10,value =>console.log(value))
  return (
    <div>Recursion</div>
  )
}

export default Recursion