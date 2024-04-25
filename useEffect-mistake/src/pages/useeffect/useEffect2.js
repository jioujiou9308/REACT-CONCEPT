import React ,{useState,useEffect}from 'react'

const UseEffect2 = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLasttName] = useState('')
    // const [fullName,setFullName]= useState('')
console.log('render');
console.log(firstName);
console.log(lastName);
    // useEffect(()=>{
    //     setFullName(firstName + lastName)
    // },[firstName,lastName])
const fullName = firstName + lastName
  return (
    <div>
        <input style={{border:'solid'}} value={firstName} onChange={e=>setFirstName(e.target.value)}/>
        <br/>
        <input  style={{border:'solid'}} value={lastName} onChange={e=>setLasttName(e.target.value)}/>
        {fullName}
    </div>
  )
}

export default UseEffect2