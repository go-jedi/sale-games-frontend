'use client';

import React from 'react';

import { useAppSelector } from '@/redux/store';

import styles from '@/components/Header/Header.module.scss';

import Logo from '@/components/Header/Logo/Logo';
import Category from '@/components/Header/Category/Category';
import Navigate from '@/components/Header/Navigate/Navigate';

const Header: React.FC = () => {
  const { scroll } = useAppSelector((state) => state.scroll);

  return (
    <div>
      <div
        className={styles.header}
        style={{ height: `${scroll.scrollY > 119 ? '50px' : '80px'}` }}>
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
