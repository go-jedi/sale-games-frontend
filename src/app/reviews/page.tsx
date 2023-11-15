import React from 'react';

import styles from '@/app/reviews/page.module.scss';

import Reviews from '@/components/Reviews/Reviews';

const ReviewsPage: React.FC = () => {
  return (
    <div className={styles.reviews}>
      <Reviews />
    </div>
  );
};

export default ReviewsPage;
