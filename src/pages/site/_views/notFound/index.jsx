import React from 'react';

import './index.scss';

export default function NotFount(props) {

  console.log('🍉  notfount props', props);
  const prefixCls = 'pager-notfound';

  return (
    <div className={prefixCls}>
      <div className="iconfont icon-404"></div>
      404 Not Found
    </div>
  )
}