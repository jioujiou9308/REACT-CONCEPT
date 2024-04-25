import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [val,setVal] = useState('')
    const [phrase,setPhrase] = useState('example phrase')
console.log('00000');
    const createPhrase = ()=>{
        setPhrase(val)
        setVal('')
    }
    useEffect(()=>{
        console.log(`typing ${val}`)

    },[val])
    useEffect(()=>{
        console.log(`saved phrase : "${phrase}"`);

    },[phrase])

    useEffect(()=>{
        newsFeed.subscribe(url,addPost)
        welcomeChime.play()
        return ()=>{
            newsFeed.unsubscribe(url)
            goodbyeChime.play()
        }
    },[])
  return (
    <>
        <label>Favorite phrase:</label>
        <input value={val}
            placeholder={phrase}
            onChange={e=>setVal(e.target.value)}
        />
        <button onClick={createPhrase}>send</button>
    </>
  )
}

export default UseEffect