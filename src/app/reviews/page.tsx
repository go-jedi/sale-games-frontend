import React from 'react';

import styles from '@/app/reviews/page.module.scss';

const ReviewsPage: React.FC = () => {
  return (
    <div className={styles.reviews}>
      <div style={{ color: '#fff' }}>Отзывы</div>
    </div>
  );
};

export default ReviewsPage;
