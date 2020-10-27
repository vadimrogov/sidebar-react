import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './SideBar.module.css';

import SideBarMenu from '../SideBarMenu/SideBarMenu';
import MenuIconButton from '../MenuIconButton/MenuIconButton';

const SideBar = ({ name, componentRenderer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => setIsOpen(!isOpen);

  return (
    <div className={classNames(styles.root, { [styles.isOpen]: isOpen })}>
      {isOpen && <SideBarMenu title='Viktor' openSideBarHandler={openSideBar} />}
      <div
        className={classNames(styles.content, {
          [styles.rotated]: isOpen,
        })}
      >
        <div className={styles.titleBar}>
          <MenuIconButton onClickHandler={openSideBar} />
          {name.toUpperCase()}
        </div>
        <div className={styles.container}>{componentRenderer()}</div>
      </div>
    </div>
  );
};

export default SideBar;
