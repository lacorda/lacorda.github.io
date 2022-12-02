import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import genMenus from './menus';
import { genBem, observerTheme } from '@site/src/pages/_utils';

import './index.scss';

const Sidebar = (props) => {
  const { history } = props;

  const prefixCls = 'components-sidebar';
  const bem = (e, m) => (genBem(prefixCls, e, m));

  const [theme, setTheme] = useState();
  const [current, setCurrent] = useState('demo');

  let observer = null;
  const items = genMenus();

  useEffect(() => {
    // 修改编辑器主题
    observer = observerTheme((theme) => {
      setTheme(theme);
    });
  }, [])

  useEffect(() => {
    return () => {
      observer?.destroy();
    }
  }, [])


  const onClick = (e) => {
    setCurrent(e.key);
    history.push(e.key);
  };

  return (
    <div className={bem()}>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={['tools']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  )
}

export default Sidebar;