import React from 'react'

function Response({ prompt, response }) {
  return (
    <div>
        <p>Prompt: {prompt}</p>
        <p>Response: {response}</p>
    </div>
  )
}

export default Response