'use client';

import React from 'react';

import { Drawer, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from '@/components/Header/Navigate/SearchMenu/SearchMenu.module.scss';

const SearchMenu: React.FC = () => {
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
    <>
      <Tooltip title="Поиск">
        <SearchOutlined className={styles.icon} onClick={showDrawer} />
      </Tooltip>
      <Drawer title="Поиск" placement="top" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default SearchMenu;
