import React from 'react';

import styles from '@/app/news/[id]/page.module.scss';

import NewsId from '@/components/NewsId/NewsId';

const NewsIdPage = ({ params }: { params: { id: string } }) => {
  console.log('params.id -->', params.id);

  return (
    <div className={styles.news}>
      <NewsId />
    </div>
  );
};

export default NewsIdPage;
