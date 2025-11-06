// src/components/Footer.jsx
import React from 'react';

function Footer({ text }) {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", padding: "10px", marginTop: "20px" }}>
      <p>{text}</p>
    </footer>
  );
}

export default Footer;
