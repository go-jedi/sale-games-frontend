import React from 'react';
import Image from 'next/image';

import LogoImg from '@/assets/img/logo.svg';

import styles from '@/components/Header/Logo/Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image className={styles.logo_img} src={LogoImg} priority={true} alt="logo" />
      <div className={styles.logo_title}>Games Rent</div>
    </div>
  );
};

export default Logo;
