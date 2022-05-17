import React from 'react'
import kaia from '../Data/Kaia.svg'

function NoResponses() {
  return (
    <div id='no-responses'>
        <p>SO EMPTY! Send a prompt to Kaia to get a response!</p>
        <img src={kaia}></img>
    </div>
  )
}

export default NoResponses