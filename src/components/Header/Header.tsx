import React from 'react';

import styles from '@/components/Header/Header.module.scss';

import Logo from '@/components/Header/Logo/Logo';
import Category from '@/components/Header/Category/Category';
import Auth from '@/components/Header/Auth/Auth';

const Header: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <Logo />
        <Category />
        <Auth />
      </div>
    </div>
  );
};

export default Header;
