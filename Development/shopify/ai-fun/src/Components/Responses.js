import React from 'react'
import Response from './Response'

function Responses({ responses }) {
  return (
    <div>
        <h2>Kaia's Responses</h2>
        {responses.map(res => (
            <Response prompt={res.prompt} response={res.response}/>
        ))}
    </div>
  )
}

export default Responses