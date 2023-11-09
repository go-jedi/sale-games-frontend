import React from 'react';

import { Empty } from 'antd';

import styles from '@/components/News/NewsEmpty/NewsEmpty.module.scss';

const NewsEmpty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <Empty className={styles.icon} description={false} />
      <div className={styles.description}>Пусто</div>
    </div>
  );
};

export default NewsEmpty;
