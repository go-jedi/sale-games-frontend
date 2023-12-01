import React from 'react';

import styles from '@/app/shop/page.module.scss';

import Shop from '@/components/Shop/Shop';

const ShopPage: React.FC = () => {
  return (
    <div className={styles.shop}>
      <Shop />
    </div>
  );
};

export default ShopPage;
