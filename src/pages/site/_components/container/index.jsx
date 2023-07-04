import React from 'react';
import classnames from 'classnames';
import Sidebar from '../sidebar';

import './index.scss';

const Container = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const cls = classnames('site-pager__wrapper', className);

  return (
    <div className={cls}>
      <Sidebar {...rest} />
      <div className="site-pager__container">
        {children}
      </div>
    </div>
  )
}

export default Container;