import React from 'react';

import styles from '@/components/Reviews/Reviews.module.scss';

import Form from '@/components/Reviews/Form/Form';

const Reviews: React.FC = () => {
  return (
    <>
      <div className={styles.title}>Отзывы</div>
      <Form />
    </>
  );
};

export default Reviews;
