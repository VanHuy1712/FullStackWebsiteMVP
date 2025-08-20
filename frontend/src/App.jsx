import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/hello')
      .then((response) => setMessage(response.data))
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Fetch failed');
      });
  }, []);

  return (
    <div className="App">
      <h1>React + NestJS Fullstack</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;


