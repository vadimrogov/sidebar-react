import React from 'react';

import styles from './MenuIconButton.module.css';

const MenuIconButton = ({ onClickHandler }) => {
  return (
    <div className={styles.menuBtn} onClick={onClickHandler}>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.rectangle}></div>
    </div>
  );
};

export default MenuIconButton;
