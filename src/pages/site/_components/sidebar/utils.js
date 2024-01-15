import { getItem, menus } from '../../_router/menus';

export const genMenus = () => {
  return menus.map(menu => {
    const { label, key, icon, children } = menu;
    return getItem(label, key, icon, children.map(child => {
      const { label: cLabel, key: cKey, icon: cIcon } = child;
      return getItem(cLabel, cKey, cIcon);
    }))
  })
};
