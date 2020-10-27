import React from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import styles from './SideBarButton.module.css';

const SideBarButton = ({ text, pathTo, callback }) => {
  const { push, location } = useHistory();

  return (
    <div
      className={classNames(styles.sideMenuItem, {
        [styles.sideMenuItemSelected]: location.pathname === pathTo,
      })}
      onClick={() => {
        if (callback) callback();
        push(pathTo);
      }}
    >
      <div
        className={classNames(styles.sideMenuItemText, {
          [styles.sideMenuItemTextSelected]: location.pathname === pathTo,
        })}
      >
        {text}
      </div>
    </div>
  );
};

export default SideBarButton;
