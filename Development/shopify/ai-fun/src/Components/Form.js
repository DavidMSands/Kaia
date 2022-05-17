import React, { useState } from 'react'

const KEY = process.env.REACT_APP_OPENAI_SECRET

function Form({ setResponses }) {
    const [prompt, setPrompt] = useState()

    const kaiaSubmit = (e) => {
        e.preventDefault()
        const data = {
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }

        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${KEY}`,
            },
            body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(r => {
                setResponses((responses) => [{
                prompt: prompt,
                response: r.choices[0].text
                }, ...responses])
            setPrompt('')
            console.log(r)
            })
            
    }


  return (
    <div id='form'>
        <form onSubmit={kaiaSubmit}>
            <label>Send a prompt to Kaia: </label>
            <div id='ask-kaia'>
                <textarea rows="10" cols="50" placeholder='Write a haiku about rice...' value={prompt} onChange={(e) => setPrompt(e.target.value)}></textarea>
            </div>
            <input type='submit' value="Send" className='new-prompt-submit'></input>
        </form>
    </div>
  )
}

export default Form