import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Button } from 'antd';

const UseEffectDemo = (props) => {
  const [value, setValue] = useState(0)

  // useLayoutEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200)
  //   }
  // }, [value])

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  return (
    <div className="useeffect-container">
      <Button type="primary" size="sm" onClick={() => setValue(0)}>value: {value}</Button>
    </div>
  );
};

export default UseEffectDemo;