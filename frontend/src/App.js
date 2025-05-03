import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/ping/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Quiniela Web App</h1>
      <p>API says: {message}</p>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
