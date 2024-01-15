import React, { useState, useMemo } from 'react';
import { Button } from 'antd'
import NumberList from './numberList'

const UseMemoDemo = (props) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  // 使用 useMemo 优化计算平方
  const squaredNumbers = useMemo(() => {
    console.log('🍉  squaredNumbers 重新计算 ');
    return numbers.map((number) => number * number);
  }, [numbers]);

  return (
    <div className="usecallback-container">
      <h1>Number Squares</h1>
      <NumberList numbers={squaredNumbers} />
      <Button type="primary" size="sm" onClick={() => setCount(count + 1)}>count: {count}</Button>
      <br />
      <br />
      <Button type="primary" size="sm" onClick={() => setNumbers(numbers.map(n => n + 1))}>numbers: {numbers}</Button>
    </div >
  );
};

export default UseMemoDemo;