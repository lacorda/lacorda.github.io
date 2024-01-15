import React, { useState, useCallback } from 'react';
import Button from './button';

const UseCallbackDemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 使用 useCallback 优化回调函数的创建
  const handleIncrement1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleIncrement2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // const handleIncrement1 = () => {
  //   setCount1(count1 + 1);
  // };

  // const handleIncrement2 = () => {
  //   setCount2(count2 + 1);
  // };

  return (
    <div className="usecallback-container">
      <Button onClick={handleIncrement1} label={`Count 1: ${count1}`} />
      <Button onClick={handleIncrement2} label={`Count 2: ${count2}`} />
    </div>
  );
};

export default UseCallbackDemo;