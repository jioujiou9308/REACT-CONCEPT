import React,{useState,useEffect} from 'react'

const Usestate = () => {
    const [s,setS] = useState(false)
    const [d,setD] = useState([])
    useEffect(()=>{
  
        setS(false)
        setD([])
       
    },[])
    console.log('渲染次數')
console.log('d',d);
  return (
    <div>Usestate</div>
  )
}

export default Usestate