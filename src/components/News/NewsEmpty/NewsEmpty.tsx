'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { Empty } from 'antd';

import styles from '@/components/News/NewsEmpty/NewsEmpty.module.scss';

const NewsEmpty: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.empty}>
      <Empty className={styles.icon} description={false} />
      <div className={styles.description}>Пусто</div>
      <button className={styles.btn} onClick={() => router.back()}>
        Назад
      </button>
    </div>
  );
};

export default NewsEmpty;
