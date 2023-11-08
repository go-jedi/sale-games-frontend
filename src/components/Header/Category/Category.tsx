'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import { setScroll } from '@/redux/scroll/slice';

import styles from '@/components/Header/Category/Category.module.scss';

type LinksType = {
  id: number;
  name: string;
  route: string;
  isCaret: boolean;
};

const links: LinksType[] = [
  {
    id: 1,
    name: 'Главная',
    route: '/',
    isCaret: true,
  },
  {
    id: 2,
    name: 'Магазин',
    route: '/shop',
    isCaret: true,
  },
  {
    id: 3,
    name: 'Новости',
    route: '/news',
    isCaret: false,
  },
  {
    id: 4,
    name: 'Отзывы',
    route: '/reviews',
    isCaret: false,
  },
  {
    id: 5,
    name: 'Блог',
    route: '/blog',
    isCaret: false,
  },
];

const Category: React.FC = () => {
  const { scroll } = useAppSelector((state) => state.scroll);
  const dispatch = useAppDispatch();

  const pathname: string = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      dispatch(setScroll({ scrollX: window.scrollX, scrollY: window.scrollY }));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.menu}>
        {links.map((e: LinksType) => {
          return (
            <li
              key={e.id}
              className={`${styles.block} ${pathname === e.route ? styles.active : ''}`}
              style={{ height: `${scroll.scrollY > 119 ? '50px' : '80px'}` }}>
              <Link className={styles.link} href={e.route}>
                {e.name}
                {e.isCaret && <span className={styles.caret}></span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
