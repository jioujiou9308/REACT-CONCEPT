import React,{useEffect,useState,useMemo} from 'react'

const UseEffect3 = () => {
    const [age,setAge] = useState(0)
    const [name,setName] = useState("")
    const [darkMode,setDarkMode] = useState(false)

    // const person = { age,name}
    const person = useMemo(()=>{
        return {age,name}
    },[age,name])

    useEffect(()=>{
        console.log(person);
    },[person])
  return (
    <div style={{background:darkMode?"#333":"#FFF"}}>
        Age:{''}
        <input value={age} type='number' onChange={e=>setAge(e.target.value)}/>
        <br/>
        Name:{''}
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <br/>
        Dark Mode:{''}
        <input type="checkbox" value={darkMode} onChange={e=>setDarkMode(e.target.checked)}/>
   
    </div>
  )
}

export default UseEffect3