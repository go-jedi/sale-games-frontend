'use client';

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import styles from '@/components/Header/Category/Category.module.scss';

type LinksType = {
  id: number;
  name: string;
  route: string;
};

const links: LinksType[] = [
  {
    id: 1,
    name: 'Главная',
    route: '/',
  },
  {
    id: 2,
    name: 'Магазин',
    route: '/shop',
  },
  {
    id: 3,
    name: 'Новости',
    route: '/news',
  },
  {
    id: 4,
    name: 'Отзывы',
    route: '/reviews',
  },
];

const Category: React.FC = () => {
  const pathname: string = usePathname();

  return (
    <div>
      <ul className={styles.nav}>
        {links.map((e: LinksType) => {
          return (
            <li className={styles.navlink} key={e.id}>
              <Link className={pathname === e.route ? styles.active : styles.link} href={e.route}>
                {e.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
