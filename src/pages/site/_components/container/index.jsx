import React from 'react';
import Sidebar from '../sidebar';

import './index.scss';

const Container = (props) => {
  const {
    children,
    ...rest
  } = props;

  return (
    <div className="site-pager__wrapper">
      <Sidebar {...rest} />
      <div className="site-pager__container">
        {children}
      </div>
    </div>
  )
}

export default Container;