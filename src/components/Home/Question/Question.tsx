import React from 'react';
import Link from 'next/link';

import { QuestionCircleOutlined, WifiOutlined } from '@ant-design/icons';

import styles from '@/components/Home/Question/Question.module.scss';

const Question: React.FC = () => {
  return (
    <div className={styles.question}>
      <div className={styles.title}>Есть вопросы?</div>
      <div className={styles.text}>
        Часто задаваемые вопросы:
        <Link className={styles.link} href={'/faq'}>
          <QuestionCircleOutlined className={styles.icon} />
        </Link>
      </div>
      <div className={styles.text}>
        Свяжитесь с нами, используя техническую поддержку:
        <Link className={styles.link} href={'/support'}>
          <WifiOutlined className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Question;
