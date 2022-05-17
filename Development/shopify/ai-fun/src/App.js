import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Responses from './Components/Responses';

function App() {
  const [responses, setResponses] = useState([])

  return (
    <div className="App">
      <Header />
      <Form setResponses={setResponses} responses={responses} />
      <Responses responses={responses} />
    </div>
  );
}

export default App;
