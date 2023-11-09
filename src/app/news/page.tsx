import React from 'react';

import styles from '@/app/news/page.module.scss';

import News from '@/components/News/News';

const NewsPage: React.FC = () => {
  return (
    <div className={styles.news}>
      <News />
    </div>
  );
};

export default NewsPage;
