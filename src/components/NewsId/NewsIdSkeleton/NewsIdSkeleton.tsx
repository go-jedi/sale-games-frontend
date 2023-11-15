import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/components/NewsId/NewsIdSkeleton/NewsIdSkeleton.module.scss';

const NewsIdSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton
        className={styles.title}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      />
      <div className={styles.block}>
        <Skeleton
          className={styles.text}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.subtitle}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.text}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.subtitle}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.text}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
      </div>
    </>
  );
};

export default NewsIdSkeleton;
