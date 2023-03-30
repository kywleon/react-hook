/* Tutorial - 31 - useDocumentTitle Custom Hook */ 

import { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count -  ${count}`
    }, [count])
}

export default useDocumentTitle