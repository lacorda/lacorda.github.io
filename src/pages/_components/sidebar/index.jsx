import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { genMenus } from './utils';
import { genBem, observerTheme } from '@site/src/pages/_utils';

import './index.scss';

const Sidebar = (props) => {
  const { history, menus } = props;

  const prefixCls = 'components-sidebar';
  const bem = (e, m) => (genBem(prefixCls, e, m));
  const paths = history.location.pathname.split('/').filter(i => i);
  const currentKey = paths.join('#');
  const openKey = paths[0];

  const [theme, setTheme] = useState();

  let observer = null;
  const items = genMenus(menus);

  useEffect(() => {
    // 修改编辑器主题
    observer = observerTheme((t) => {
      setTheme(t);
    });
  }, [])

  useEffect(() => {
    return () => {
      observer?.destroy();
    }
  }, [])


  const onClick = (e) => {
    const path = e.key.split('#').join('/');
    history.push(`/${path}`);
  };

  return (
    <div className={bem()}>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={[openKey]}
        selectedKeys={[currentKey]}
        mode="inline"
        items={items}
      />
    </div>
  )
}

export default Sidebar;