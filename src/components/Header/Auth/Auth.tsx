'use client';

import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import styles from '@/components/Header/Auth/Auth.module.scss';

type LinksType = {
  id: number;
  name: string;
  route: string;
};

const links: LinksType[] = [
  {
    id: 1,
    name: 'Войти',
    route: '/sign-in',
  },
  {
    id: 2,
    name: 'Регистрация',
    route: '/sign-up',
  },
];

const Auth: React.FC = () => {
  const pathname: string = usePathname();

  if (['/sign-up', '/sign-in'].includes(pathname) === true) {
    return <></>;
  }

  return (
    <div className={styles.auth}>
      <div className={styles.links}>
        {links.map((e: LinksType) => {
          return (
            <Link
              key={e.id}
              className={e.route === '/sign-in' ? styles.link_si : styles.link_su}
              href={e.route}>
              {e.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Auth;
