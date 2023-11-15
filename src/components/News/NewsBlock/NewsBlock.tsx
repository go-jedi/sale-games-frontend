'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import { useAppDispatch } from '@/redux/store';
import { setIsChangeHeader } from '@/redux/scroll/slice';

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
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    dispatch(setIsChangeHeader(true));

    return () => {
      dispatch(setIsChangeHeader(false));
    };
  }, [dispatch]);

  return (
    <div ref={ref}>
      {inView ? (
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
      ) : (
        <NewsBlockSkeleton />
      )}
    </div>
  );
};

export default NewsBlock;
