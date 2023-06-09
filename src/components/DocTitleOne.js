/* Tutorial - 31 - useDocumentTitle Custom Hook */ 

import React , { useState  } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleOne() {

    const [count, setCount] = useState(0);

    // way to use custom Hooks 
    useDocumentTitle(count)
    
    // normal way 
    // useEffect(() => {
    //     document.title = `Count -  ${count}`
    // }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count} </button>
    </div>
  )
}

export default DocTitleOne
