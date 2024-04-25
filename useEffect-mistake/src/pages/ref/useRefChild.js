import React ,{forwardRef,useImperativeHandle,useRef } from 'react'

const UseRefChild = forwardRef(({label,...rest},ref) => {
const useFordwardRef1 = useRef(null)
const useFordwardRef2 = useRef(null)
    
useImperativeHandle(ref,(()=>({
    focusInput:()=>{
        useFordwardRef1.current.focus()
    },
    sayHello:()=>{
        console.log('say hello');
    },
    focusInput2:()=>{
        useFordwardRef2.current.focus()
    },
    
})))


  return (
    <>
    <div >
        <input {...rest} ref={useFordwardRef1} type='text' className='border-2 '/>
        <input ref={useFordwardRef2} type='text' className='border-2 '/>
        <div >{label}</div>
    </div>
    </>

  )
});

export default UseRefChild

UseRefChild.displayName = 'UseRefChild'