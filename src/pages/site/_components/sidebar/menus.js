import React from 'react';
import {
  BgColorsOutlined,
  ToolOutlined,
  FunctionOutlined,
  LinkOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menus = [
  {
    label: '我的工具',
    key: 'tools',
    icon: <ToolOutlined />,
    children: [
      {
        label: 'Option 1',
        key: 'demo',
        icon: null,
      },
    ]
  },
  {
    label: 'HTML与CSS',
    key: 'css',
    icon: <BgColorsOutlined />,
    children: [
      {
        label: 'Option 5',
        key: '5',
        icon: null,
      },
    ]
  },
  {
    label: 'Javascript',
    key: 'js',
    icon: <FunctionOutlined />,
    children: [
      {
        label: 'Option 9',
        key: '9',
        icon: null,
      },
    ]
  },
  {
    label: 'React Hooks',
    key: 'react',
    icon: <LinkOutlined />,
    children: [
      {
        label: 'Option 13',
        key: '13',
        icon: null,
      },
      {
        label: 'Option 14',
        key: '14',
        icon: null,
      },
      {
        label: 'Option 15',
        key: '15',
        icon: null,
      },
      {
        label: 'Option 16',
        key: '16',
        icon: null,
      },
    ]
  },
]

export default function genMenus() {
  return menus.map(menu => {
    const { label, key, icon, children } = menu;
    return getItem(label, key, icon, children.map(child => {
      const { label: cLabel, key: cKey, icon: cIcon } = child;
      return getItem(cLabel, cKey, cIcon);
    }))
  })
};
