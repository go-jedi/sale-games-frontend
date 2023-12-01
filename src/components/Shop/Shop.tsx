import React from 'react';

import styles from '@/components/Shop/Shop.module.scss';

import Sidebar from '@/components/Shop/Sidebar/Sidebar';
import Goods from '@/components/Shop/Goods/Goods';

const Shop: React.FC = () => {
  return (
    <>
      <div className={styles.title}>Магазин</div>
      <div className={styles.content}>
        <Sidebar />
        <Goods />
      </div>
    </>
  );
};

export default Shop;
