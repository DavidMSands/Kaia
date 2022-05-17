import React from 'react'
import Response from './Response'
import NoResponses from './NoResponses'

function Responses({ responses }) {
  return (
    <div id='responses'>
        <h2>Kaia's Responses</h2>
        {responses.length === 0 ? <NoResponses /> : responses.map(res => (
            <Response prompt={res.prompt} response={res.response}/>
        ))}
    </div>
  )
}

export default Responses