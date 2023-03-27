/* Tutorial - 16 - useContext Hook */ 

import React , { useContext } from 'react'
import { UserContext , ChannelContext } from '../App'
import ComponentF from './ComponentF'

function ComponentE() {
  const user = useContext(UserContext);
  const channel =useContext(ChannelContext)
  return (
    <div>
        {/* The way use useContext Hook instead of trandition context */}
        {user} - {channel}

        <ComponentF />
    </div>
  )
}

export default ComponentE