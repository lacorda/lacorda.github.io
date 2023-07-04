import React from 'react';
import classnames from 'classnames';
import './title.scss';

const prefixCls = 'site-comp-title';

const Title = (props) => {
  const {
    className,
    children
  } = props;

  const cls = classnames(prefixCls, className);

  return (
    <div className={cls}>
      {children}
    </div>
  );
};

export default Title;