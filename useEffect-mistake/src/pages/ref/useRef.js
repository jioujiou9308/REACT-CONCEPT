import React from 'react'
import { useRef,useState } from 'react'
import UseRefChild from './useRefChild'

const UseRef = () => {

const [value,setValue] = useState('')
console.log('只要onChange就會render一次');
const submitHandler=()=>{
    console.log(value);
}

const inputRef = useRef(null)
const submitRef=()=>{
    console.log(inputRef.current.className);
    // 點擊就會使input的classname變換
    // inputRef.current.className = 'm-4 border-2'
}

const blueRef = useRef(null)
const yellowRef = useRef(null)


const moveToBlue=()=>{
    window.scrollTo({
        top: blueRef.current.offsetTop,
        behavior:'smooth'
    })
}
const moveToYellow=()=>{
    window.scrollTo({
        top: yellowRef.current.offsetTop,
        behavior:'smooth'
    })
}
// 使用fordwardRef
const useFordwardRef = useRef(null)
const focusChildRef=()=>{
    console.log('log 出 useRefChild子元件中的內容',useFordwardRef);
    useFordwardRef.current.sayHello()
    useFordwardRef.current.focusInput()
    // or
    useFordwardRef.current.focusInput2()
    
}

  return (
    <>
        {/* 這是使用useState版本 */}
        <div>
            <input type='text' className='m-2 border-4' onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={submitHandler}>Submit</button>
        </div>
        {/* 使用的是useRef版本 */}
        <div>
            <input type='text' className='border-4 ' ref={inputRef}/>
            <button onClick={submitRef}>Submit</button>
        </div>
        {/* 範例點擊然後移動到內容*/}
        {/* 使用offsetTop */}
        <div >
            <div className='h-screen bg-yellow-200' ref={yellowRef}>
                <button onClick={moveToBlue}>移動到blue區域按鈕</button>
            </div>
            <div className='h-screen bg-blue-200' ref={blueRef}>
                <button onClick={moveToYellow}>移動到yellow區域按鈕</button>
            </div>
        </div>
        {/* 使用forward 傳給子元件的ref */}
        <div className='h-screen'></div>
        <UseRefChild label='Username:' ref={useFordwardRef}/>
        {/* 抓取子元件中的ref */}
        <button onClick={focusChildRef}>focus按鈕</button>
    </>
  )
}

export default UseRef 