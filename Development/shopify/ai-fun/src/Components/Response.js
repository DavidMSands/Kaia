import React from 'react'

function Response({ prompt, response }) {
  return (
    <div className='response'>
        <p><b>Prompt:</b> {prompt}</p>
        <p><b>Response:</b> {response}</p>
    </div>
  )
}

export default Response