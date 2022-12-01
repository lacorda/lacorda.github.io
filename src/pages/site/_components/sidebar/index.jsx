import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {
  // useHistory, // 返回 history 对象
  useLocation, // 返回 location 对象
  // useParams, // 返回 URL 参数的键/值对的对象
  // useRouteMatch, // 匹配 props.match，此处为 docusaurus 的静态路由
} from 'react-router-dom';
import genMenus from './menus';
import { genBem, observerTheme } from '@site/src/pages/_utils';

const Sidebar = (props) => {
  const {
  } = props;

  const [theme, setTheme] = useState();
  const [current, setCurrent] = useState('1');

  const location = useLocation();
  const inValid = location.hash.replace(/\#\/(demo|example)/g, '');
  if (inValid) {
    return null;
  }

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