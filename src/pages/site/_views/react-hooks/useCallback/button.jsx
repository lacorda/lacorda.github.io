import React from 'react';

const Button = ({ onClick, label }) => {
  console.log('Button rendered:', label);
  return <button onClick={onClick}>{label}</button>;
};

export default React.memo(Button);