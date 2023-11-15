import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/NewsId/Card/Card.module.scss';

import ImgCard from '@/assets/img/Assassin’s_Creed_Mirage_logo.jpeg';

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image className={styles.image} src={ImgCard} priority={true} alt={'Card Image'} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>Assassin`s Creed Mirage</div>
      </div>
      <div className={styles.button}>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default Card;
