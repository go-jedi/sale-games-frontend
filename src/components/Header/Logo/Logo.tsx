import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoImg from '@/assets/img/logo.png';

import styles from '@/components/Header/Logo/Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image className={styles.logo_img} src={LogoImg} priority={true} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
