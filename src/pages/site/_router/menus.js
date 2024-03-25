import React from 'react';

import {
  BgColorsOutlined,
  ToolOutlined,
  FunctionOutlined,
  LinkOutlined,
  SettingOutlined
} from '@ant-design/icons';

export default [
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
    key: 'html-css',
    icon: <BgColorsOutlined />,
    children: [
      {
        label: 'first-child与first-of-type',
        key: 'first-child',
        icon: null,
      },
      {
        label: 'CSS 技巧：从高度 0 过渡到自动！',
        key: 'CssTrickTransitionFromHeight0toauto',
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
    key: 'react-hooks',
    icon: <LinkOutlined />,
    children: [
      {
        label: 'useEffect与useLayoutEffect',
        key: 'useEffect',
        icon: null,
      },
      {
        label: 'useCallback',
        key: 'useCallback',
        icon: null,
      },
      {
        label: 'useMemo',
        key: 'useMemo',
        icon: null,
      },
    ]
  },
  {
    label: 'DevTools',
    key: 'devtools',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Element面板',
        key: 'element',
        icon: null,
      },
    ]
  },
]

