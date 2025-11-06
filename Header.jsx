// src/components/Header.jsx
import React from 'react';

function Header({ title }) {
  return (
    <header style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
