import React from 'react';
import Link from 'next/link';

import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import styles from '@/components/Home/SocialNetwork/SocialNetwork.module.scss';

const SocialNetwork: React.FC = () => {
  return (
    <div className={styles.socialnetwork}>
      <div className={styles.title}>Мы в соцсетях</div>
      <div className={styles.block}>
        <Link className={styles.link} href={'/facebook'}>
          <FacebookOutlined className={styles.icon} />
        </Link>
        <Link className={styles.link} href={'/instagram'}>
          <InstagramOutlined className={styles.icon} />
        </Link>
        <Link className={styles.link} href={'/youtube'}>
          <YoutubeOutlined className={styles.icon} />
        </Link>
        <Link className={styles.link} href={'/twitter'}>
          <TwitterOutlined className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default SocialNetwork;
