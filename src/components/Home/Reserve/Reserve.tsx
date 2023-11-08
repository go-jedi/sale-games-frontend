import React from 'react';

import styles from '@/components/Home/Reserve/Reserve.module.scss';

const Reserve: React.FC = () => {
  return (
    <div className={styles.reserve}>
      <div className={styles.text}>
        <b>нК</b> © 2023. Все права защищены.
      </div>
    </div>
  );
};

export default Reserve;
