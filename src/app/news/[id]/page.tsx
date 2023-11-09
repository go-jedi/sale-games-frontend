import React from 'react';

import styles from '@/app/news/[id]/page.module.scss';

const NewsIdPage = ({ params }: { params: { id: string } }) => {
  console.log('params.id -->', params.id);

  return (
    <div className={styles.news}>
      <div style={{ color: 'red' }}>NewsIdPage</div>
    </div>
  );
};

export default NewsIdPage;
