/* Tutorial - 26 - useCallback Hook */ 
import React from 'react'

function Count({text,count}) {
  console.log(`Rendering ${text}`)
  return (
    <div>{text} - {count}</div>
  )
}

export default  React.memo(Count)