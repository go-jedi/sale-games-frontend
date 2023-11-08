import React from 'react';

import styles from '@/components/Home/Novelty/Novelty.module.scss';

import SliderImage from '@/instruments/SliderImage/SliderImage';

const Novelty: React.FC = () => {
  return (
    <div className={styles.novelty}>
      <div className={styles.title}>Новинки</div>
      <SliderImage />
    </div>
  );
};

export default Novelty;
