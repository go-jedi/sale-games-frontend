import React from 'react';

import styles from '@/app/loading.module.scss';

import Loader from '@/instruments/Loader/Loader';

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <Loader />
    </div>
  );
};

export default Loading;
