import React from 'react';
import Link from 'next/link';

import styles from '@/components/Header/Navigate/Navigate.module.scss';

import UserMenu from '@/components/Header/Navigate/UserMenu/User';
import SearchMenu from '@/components/Header/Navigate/SearchMenu/SearchMenu';
import BasketMenu from '@/components/Header/Navigate/BasketMenu/BasketMenu';

const Navigate: React.FC = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.block}>
          <UserMenu />
        </li>
        <li className={styles.block}>
          <SearchMenu />
        </li>
        <li className={styles.block}>
          <BasketMenu />
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
