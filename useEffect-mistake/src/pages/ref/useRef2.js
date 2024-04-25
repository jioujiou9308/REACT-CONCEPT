import React,{useRef} from 'react'

const UseRef2 = () => {
    const accountRef = useRef(undefined);
    const passwordRef = useRef(undefined);

    // 為了方便操作，建立一個array來管理這些ref
    const refArr = useRef([accountRef,passwordRef]);

    return ( // 將剛剛創立的變數綁在對應的位置
        <>
            <input 
                type="text" 
                name="account"
                ref={accountRef} 
            />
            <input 
                type="text" 
                name="password"
                ref={passwordRef} 
            />
            <button onClick={()=>{
                refArr.current.forEach((item)=>{
                    console.log(item.current.name+" is "+item.current.value);
                    console.log('accountRef',accountRef.current.value)
                })
            }}>提交</button>
        </>
    )
}
export default UseRef2