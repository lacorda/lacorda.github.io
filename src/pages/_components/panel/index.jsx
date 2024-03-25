import React from 'react';
import classnames from 'classnames';
import { genBem } from '@site/src/pages/_utils';
import Title from './title';
import './index.scss';

const prefixCls = 'site-comp-panel';
const bem = (e, m) => (genBem(prefixCls, e, m));

const Panel = (props) => {
  const {
    className,
    isFlex,
    title,
    extra,
    children,
    onExtra
  } = props;

  const cls = classnames(prefixCls, className, {
    [bem('', 'flex')]: isFlex
  });

  return (
    <div className={cls}>
      <div className={bem('header')}>
        <Title>{title}</Title>
        {extra && <div className="extra" onClick={onExtra}>{extra}</div>}
      </div>
      <div className={bem('body')}>
        {children}
      </div>
    </div>
  );
};

export default Panel;