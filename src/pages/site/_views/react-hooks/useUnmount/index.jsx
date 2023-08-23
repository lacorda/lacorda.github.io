import React from 'react';
import Container from '../../../_components/container';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

const UseUnmountDemo = (props) => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <Container {...props}>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </Container>
  );
};

export default UseUnmountDemo;