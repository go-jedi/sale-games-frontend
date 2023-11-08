import React from 'react';

import styles from '@/components/Header/Header.module.scss';

import Logo from '@/components/Header/Logo/Logo';
import Category from '@/components/Header/Category/Category';
import Navigate from '@/components/Header/Navigate/Navigate';

const Header: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <Logo />
          <Category />
        </div>
        <div className={styles.header__right}>
          <Navigate />
        </div>
      </div>
    </div>
  );
};

export default Header;
