import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/instruments/SliderImage/SliderImageSkeleton/SliderImageSkeleton.module.scss';

const SliderImageSkeleton: React.FC = () => {
  return (
    <>
      <div className={styles.slider}>
        <Skeleton
          className={styles.slide}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.slide}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.slide}
          baseColor="#fff"
          highlightColor="#ccc"
          enableAnimation
          duration={2}
          direction="ltr"
          borderRadius={5}
        />
        <Skeleton
          className={styles.slide}
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

export default SliderImageSkeleton;
