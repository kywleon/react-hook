/* Tutorial - 16 - useContext Hook */ 

import React , { useContext }from 'react'
import App from '../App'
import {  UserContext , ChannelContext } from './ComponentF'

function ComponentE() {
  return (
    <div>
        <ComponentF />
    </div>
  )
}

export default ComponentE