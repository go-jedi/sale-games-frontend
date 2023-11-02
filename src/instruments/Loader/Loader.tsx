import React from 'react';

import styles from '@/instruments/Loader/Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <>
      <div className={styles.loader}></div>
    </>
  );
};

export default Loader;
