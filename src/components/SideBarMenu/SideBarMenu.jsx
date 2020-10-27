import React from 'react';

import styles from './SideBarMenu.module.css';

import SideBarButton from '../SideBarButton/SideBarButton';
import { ROUTES } from '../../constants';

const SideBarMenu = ({ title, openSideBarHandler }) => (
  <div className={styles.sideMenu}>
    <div className={styles.sideMenuTitle}>{title}</div>
    {ROUTES.reduce((acc, route, idx) => {
      if (!route.renderBottom)
        return [
          ...acc,
          <SideBarButton
            key={`sidebaritem-${idx}`}
            text={route.name}
            pathTo={route.path}
            callback={openSideBarHandler}
          />,
        ];
      return acc;
    }, [])}
    <div className={styles.divider} />
    {ROUTES.reduce((acc, route, idx) => {
      if (route.renderBottom)
        return [
          ...acc,
          <SideBarButton
            key={`sidebaritem-bottom-${idx}`}
            text={route.name}
            pathTo={route.path}
            callback={openSideBarHandler}
          />,
        ];
      return acc;
    }, [])}
  </div>
);

export default SideBarMenu;
