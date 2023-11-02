import React from 'react';

import styles from '@/app/(auth)/sign-up/page.module.scss';

import SignUp from '@/components/SignUp/SignUp';

const SignUpPage: React.FC = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.title}>
        Зарегистрируйтесь в <span className={styles.span}>GamesRent</span>
      </div>
      <div className={styles.subtitle}>Создайте аккаунт, чтобы поиграть в любимую игру</div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
