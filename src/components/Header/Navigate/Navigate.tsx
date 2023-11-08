'use client';

import React from 'react';

import styles from '@/components/Header/Navigate/Navigate.module.scss';

import UserMenu from '@/components/Header/Navigate/UserMenu/User';
import SearchMenu from '@/components/Header/Navigate/SearchMenu/SearchMenu';
import BasketMenu from '@/components/Header/Navigate/BasketMenu/BasketMenu';

const Navigate: React.FC = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <UserMenu />
        <SearchMenu />
        <BasketMenu />
      </ul>
    </div>
  );
};

export default Navigate;
