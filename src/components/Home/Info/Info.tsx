import React from 'react';

import { WifiOutlined, ClockCircleOutlined, TeamOutlined } from '@ant-design/icons';

import styles from '@/components/Home/Info/Info.module.scss';

type InformationsType = {
  id: number;
  title: string;
  text: string;
  icon: any;
};

const informations: InformationsType[] = [
  {
    id: 1,
    title: 'Поддержка',
    text: 'Круглосуточная обратная связь от наших специалистов.',
    icon: <WifiOutlined className={styles.icon} />,
  },
  {
    id: 2,
    title: 'Магазин',
    text: 'Если вы хотите сыграть в любимую игру, давайте сделаем это. С Youplay это так просто.    ',
    icon: <ClockCircleOutlined className={styles.icon} />,
  },
  {
    id: 3,
    title: 'Аренда',
    text: 'Если вы хотите зарабатывать на своём аккаунте, можете сдать его в аренду.',
    icon: <TeamOutlined className={styles.icon} />,
  },
];

const Info: React.FC = () => {
  return (
    <div className={styles.info}>
      {informations.map((e: InformationsType) => {
        return (
          <div key={e.id} className={styles.block}>
            <div className={styles.img}>{e.icon}</div>
            <div className={styles.title}>{e.title}</div>
            <div className={styles.text}>{e.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
