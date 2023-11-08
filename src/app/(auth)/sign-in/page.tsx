import React from 'react';

import styles from '@/app/(auth)/sign-in/page.module.scss';

import SignIn from '@/components/SignIn/SignIn';

const SignInPage: React.FC = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.title}>
        Войти в <span className={styles.span}>YouPlay</span>
      </div>
      <div className={styles.subtitle}>Войти в аккаунт, чтобы поиграть в любимую игру</div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
