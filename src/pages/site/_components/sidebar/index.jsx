import React, { useState } from 'react';
import { Menu } from 'antd';
import genMenus from './menus';
import { useLocation } from 'react-router-dom'

const Sidebar = (props) => {
  const {
    theme,
  } = props;

  const location = useLocation();
  console.log('当前路由', location);

  const hash = location.hash.replace('#/', '');
  if (!hash) {
    return null;
  }

  const items = genMenus();

  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      theme={theme}
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultOpenKeys={['sub1']}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  )
}

export default Sidebar;