export const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const genMenus = (menus) => {
  return menus.map(menu => {
    const { label, key, icon, children } = menu;
    return getItem(label, key, icon, children.map(child => {
      const { label: cLabel, key: cKey, icon: cIcon } = child;
      return getItem(cLabel, `${key}#${cKey}`, cIcon);
    }))
  })
};
