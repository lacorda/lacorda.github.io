import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('一级大类 - 1', 'sub1', <MailOutlined />, [
    getItem('二级分组 - 1', 'g1', null, [getItem('二级大类 - 1', '1'), getItem('二级大类 - 2', '2')], 'group'), // type = 'group'
    getItem('二级分组 - 2', 'g2', null, [getItem('二级大类 - 1', '3'), getItem('二级大类 - 2', '4')], 'group'),
  ]),
  getItem('一级大类 - 2', 'sub2', <AppstoreOutlined />, [
    getItem('二级大类 - 1', '5'),
    getItem('二级大类 - 2', '6'),
    getItem('二级大类 - 3', 'sub3', null, [getItem('三级大类 - 1', '7'), getItem('三级大类 - 2', '8')]),
  ]),
  getItem('一级大类 - 3', 'sub4', <SettingOutlined />, [
    getItem('二级大类 - 1', '9'),
    getItem('二级大类 - 2', '10'),
    getItem('二级大类 - 3', '11'),
    getItem('二级大类 - 4', '12'),
  ]),
];


const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;