import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '@/assets/img/logo.svg';

import styles from '@/components/Header/Logo/Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.link} href={'/'}>
        <Image className={styles.logo_img} src={LogoImg} priority={true} alt="logo" />
        <div className={styles.logo_title}>Games Rent</div>
      </Link>
    </div>
  );
};

export default Logo;
