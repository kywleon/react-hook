/* Tutorial - 10 - useEffect with cleanup */ 

import React , {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
   const [display, setDisplay] = useState(true);

   console.log(display);
    return (
    <div>
      
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      { display && <HookMouse />}
    </div>
  )
}

export default MouseContainer