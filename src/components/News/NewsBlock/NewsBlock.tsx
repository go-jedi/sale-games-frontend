'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/components/News/NewsBlock/NewsBlock.module.scss';

import AssasinsCreed from '@/assets/img/assasincreedmirage.jpg';

import NewsBlockSkeleton from '@/components/News/NewsBlock/NewsBlockSkeleton/NewsBlockSkeleton';

type PropsType = {
  id: number;
  title: string;
  description: string;
  img: string;
  created: string;
};

const NewsBlock: React.FC<PropsType> = (props: PropsType) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <NewsBlockSkeleton />
      ) : (
        <Link className={styles.block} href={`/news/${props.id}`}>
          <div className={styles.img}>
            <Image
              className={styles.image}
              src={AssasinsCreed}
              priority={true}
              alt={'Background Image'}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.header}>
              <div className={styles.title}>{props.title}</div>
              <div className={styles.date}>{props.created}</div>
            </div>
            <div className={styles.description}>{props.description}</div>
          </div>
        </Link>
      )}
    </>
  );
};

export default NewsBlock;
