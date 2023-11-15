import React from 'react';
import Link from 'next/link';

import { useAppSelector } from '@/redux/store';

import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { FaRegUser } from 'react-icons/fa6';

import styles from '@/components/Header/Navigate/UserMenu/UserMenu.module.scss';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link rel="noopener noreferrer" href="/sign-in">
        Войти
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link rel="noopener noreferrer" href="/sign-up">
        Регистрация
      </Link>
    ),
  },
];

const UserMenu: React.FC = () => {
  const { isChangeHeader } = useAppSelector((state) => state.scroll);

  return (
    <li className={styles.block} style={{ height: `${isChangeHeader === true ? '50px' : '80px'}` }}>
      <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
        <FaRegUser className={styles.icon} />
      </Dropdown>
    </li>
  );
};

export default UserMenu;
