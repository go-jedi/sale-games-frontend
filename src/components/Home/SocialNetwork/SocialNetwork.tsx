import React from 'react';
import Link from 'next/link';

import { Tooltip } from 'antd';
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
        <Tooltip title="Facebook">
          <Link className={styles.link} href={'/facebook'}>
            <FacebookOutlined className={styles.icon} />
          </Link>
        </Tooltip>
        <Tooltip title="Instagram">
          <Link className={styles.link} href={'/instagram'}>
            <InstagramOutlined className={styles.icon} />
          </Link>
        </Tooltip>
        <Tooltip title="YouTube">
          <Link className={styles.link} href={'/youtube'}>
            <YoutubeOutlined className={styles.icon} />
          </Link>
        </Tooltip>
        <Tooltip title="Twitter">
          <Link className={styles.link} href={'/twitter'}>
            <TwitterOutlined className={styles.icon} />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default SocialNetwork;
