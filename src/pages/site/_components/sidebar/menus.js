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
    label: 'Navigation One',
    key: 'sub1',
    icon: null,
    children: [
      {
        label: 'Option 1',
        key: '1',
        icon: null,
      },
      {
        label: 'Option 2',
        key: '2',
        icon: null,
      },
      {
        label: 'Option 3',
        key: '3',
        icon: null,
      },
      {
        label: 'Option 4',
        key: '4',
        icon: null,
      },
    ]
  },
  {
    label: 'Navigation Two',
    key: 'sub2',
    icon: null,
    children: [
      {
        label: 'Option 5',
        key: '5',
        icon: null,
      },
      {
        label: 'Option 6',
        key: '6',
        icon: null,
      },
      {
        label: 'Submenu',
        key: 'sub3',
        icon: null,
        children: [
          {
            label: 'Option 7',
            key: '7',
            icon: null,
          },
          {
            label: 'Option 8',
            key: '8',
            icon: null,
          },
        ]
      },
    ]
  },
  {
    label: 'Navigation Three',
    key: 'sub4',
    icon: null,
    children: [
      {
        label: 'Option 9',
        key: '9',
        icon: null,
      },
      {
        label: 'Option 10',
        key: '10',
        icon: null,
      },
      {
        label: 'Option 11',
        key: '11',
        icon: null,
      },
      {
        label: 'Option 12',
        key: '12',
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
