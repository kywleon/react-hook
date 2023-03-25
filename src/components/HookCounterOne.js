/* Tutorial - 7 , 8 -  useEffect after render */ 
import React , { useState , useEffect } from 'react'

function HookCounterOne() {
    const [count , setCount] = useState(0)
    const [name , setName ] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `you clicked ${count} times`
    }, [count,name])
    
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
