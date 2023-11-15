'use client';

import React from 'react';

import { useAppSelector } from '@/redux/store';

import { Drawer, Tooltip } from 'antd';
import { SlBasket } from 'react-icons/sl';

import styles from '@/components/Header/Navigate/BasketMenu/BasketMenu.module.scss';

const BasketMenu: React.FC = () => {
  const { isChangeHeader } = useAppSelector((state) => state.scroll);

  const [open, setOpen] = React.useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <li className={styles.block} style={{ height: `${isChangeHeader === true ? '50px' : '80px'}` }}>
      <Tooltip title="Корзина">
        <SlBasket className={styles.icon} onClick={showDrawer} />
      </Tooltip>
      <Drawer title="Корзина" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </li>
  );
};

export default BasketMenu;
