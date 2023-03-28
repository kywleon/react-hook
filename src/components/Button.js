/* Tutorial - 26 - useCallback Hook */ 

import React from 'react'

//Fast wat destruction props data
function Button({ handleClick , children }) {
  
  // second way destruction props data

  // function Button(props) {
  // console.log(props)
  // const { handleClick , children } = props;
  // console.log(handleClick)
  // console.log(children)

  console.log(`Rendering button - ` , children)
  
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(Button)