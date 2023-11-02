'use client';

import React from 'react';

import styles from '@/components/SignIn/SignIn.module.scss';

const SignIn: React.FC = () => {
  const onSubmit = (): void => {
    try {
    } catch (error) {
      console.log('error in onSubmit -->', error);
    }
  };

  return (
    <div className={styles.signin}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.block}>
          <div className={styles.label}>
            <label htmlFor="email">E-mail</label>
          </div>
          <div className={styles.input}>
            <input type="text" id="email" name="email" placeholder="Эл. почта" />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.label}>
            <label htmlFor="password">Пароль</label>
          </div>
          <div className={styles.input}>
            <input type="text" id="password" name="password" placeholder="Пароль" />
          </div>
        </div>
        <div className={styles.submit}>
          <button className={styles.btn}>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
