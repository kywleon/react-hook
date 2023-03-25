/* Tutorial - 11 - useEffect with incorrect dependency */ 

import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {

  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1)

    // second way without dependency
    setCount( (prevCount) => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick , 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <div>
      { count }
    </div>
  )
}

export default IntervalHookCounter

