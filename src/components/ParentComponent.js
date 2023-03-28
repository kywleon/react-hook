/* Tutorial - 26 - useCallback Hook */ 

import React , { useState }from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = () => {
      setAge(age + 1)
    }

    const incrementSalary = () => {
      setSalary(salary + 1000)
    }


  return (
    <div>Parent Component</div>
  )
}

export default ParentComponent
