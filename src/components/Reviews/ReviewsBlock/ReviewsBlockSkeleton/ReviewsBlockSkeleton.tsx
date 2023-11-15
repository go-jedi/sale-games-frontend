import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/components/Reviews/ReviewsBlock/ReviewsBlockSkeleton/ReviewsBlockSkeleton.module.scss';

const ReviewsBlockSkeleton: React.FC = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <Skeleton
            key={index}
            className={styles.block}
            baseColor="#fff"
            highlightColor="#ccc"
            enableAnimation
            duration={2}
            direction="ltr"
            borderRadius={5}
          />
        );
      })}
    </>
  );
};

export default ReviewsBlockSkeleton;
