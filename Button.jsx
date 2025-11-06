// src/components/Button.jsx
import React from 'react';

function Button({ label, onClick, color = "blue" }) {
  const styles = {
    backgroundColor: color,
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return <button style={styles} onClick={onClick}>{label}</button>;
}

export default Button;
