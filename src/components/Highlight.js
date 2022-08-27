import React from 'react';

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color || '#25c2a0',
        borderRadius: '2px',
        color: '#fff',
        padding: '0 0.2rem',
        margin: '0 0.2rem',
      }}>
      {children}
    </span>
  );
}