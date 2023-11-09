import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/components/Home/Info/InfoSkeleton/InfoSkeleton.module.scss';

const InfoSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton
        className={styles.block}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      />
      <Skeleton
        className={styles.block}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      />
      <Skeleton
        className={styles.block}
        baseColor="#fff"
        highlightColor="#ccc"
        enableAnimation
        duration={2}
        direction="ltr"
        borderRadius={5}
      />
    </>
  );
};

export default InfoSkeleton;
