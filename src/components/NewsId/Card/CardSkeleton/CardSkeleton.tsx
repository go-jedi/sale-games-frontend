import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/components/NewsId/Card/CardSkeleton/CardSkeleton.module.scss';

const CardSkeleton: React.FC = () => {
  return (
    <div className={styles.card}>
      <Skeleton
        className={styles.img}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      />
      <div className={styles.info}>
        <Skeleton
          className={styles.title}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
      </div>
      <Skeleton
        className={styles.button}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      />
    </div>
  );
};

export default CardSkeleton;

{
  /* <Skeleton
        className={styles.title}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      /> */
}
