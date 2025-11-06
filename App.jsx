// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Header title="Welcome to My React App" />

      <main style={{ padding: "20px" }}>
        <h2>This is the main content</h2>
        <Button label="Click Me" onClick={handleClick} color="green" />
        <Button label="Learn More" onClick={() => alert("Learning...")} color="purple" />
      </main>

      <Footer text="© 2025 My React App. All rights reserved." />
    </div>
  );
}

export default App;
