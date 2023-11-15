'use client';

import React from 'react';

import { useAppSelector } from '@/redux/store';

import { Drawer, Tooltip } from 'antd';
import { IoIosSearch } from 'react-icons/io';

import styles from '@/components/Header/Navigate/SearchMenu/SearchMenu.module.scss';

const SearchMenu: React.FC = () => {
  const { isChangeHeader } = useAppSelector((state) => state.scroll);

  const [open, setOpen] = React.useState<boolean>(false);

  const showDrawer = (): void => {
    try {
      setOpen(true);
    } catch (error) {
      console.log('error in showDrawe -->', error);
    }
  };

  const onClose = (): void => {
    try {
      setOpen(false);
    } catch (error) {
      console.log('error in onClose -->', error);
    }
  };

  return (
    <li className={styles.block} style={{ height: `${isChangeHeader === true ? '50px' : '80px'}` }}>
      <Tooltip title="Поиск">
        <IoIosSearch className={styles.icon} onClick={showDrawer} />
      </Tooltip>
      <Drawer title="Поиск" placement="top" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </li>
  );
};

export default SearchMenu;
