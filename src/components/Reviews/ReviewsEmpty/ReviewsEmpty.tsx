'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { Empty } from 'antd';

import styles from '@/components/Reviews/ReviewsEmpty/ReviewsEmpty.module.scss';

const ReviewsEmpty: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.empty}>
      <Empty className={styles.icon} description={false} />
      <div className={styles.description}>Пусто</div>
    </div>
  );
};

export default ReviewsEmpty;
