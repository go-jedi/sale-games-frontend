'use client';

import React from 'react';

import styles from '@/components/SignUp/SignUp.module.scss';

const SignUp: React.FC = () => {
  const onSubmit = (): void => {
    try {
    } catch (error) {
      console.log('error in onSubmit -->', error);
    }
  };

  return (
    <div className={styles.signup}>
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
            <label htmlFor="login">Логин</label>
          </div>
          <div className={styles.input}>
            <input type="text" id="login" name="login" placeholder="Логин" />
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
        <div className={styles.block}>
          <div className={styles.label}>
            <label htmlFor="confirm">Повторите пароль</label>
          </div>
          <div className={styles.input}>
            <input type="text" id="confirm" name="confirm" placeholder="Повторите Пароль" />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">
              Я согласен с Условиями использования и Политикой конфиденциальности Games Rent
            </label>
          </div>
          <div className={styles.notify}>
            <input type="checkbox" id="notify" name="notify" />
            <label htmlFor="notify">
              Я хотел бы получать по электронной почте обновления и рекламные акции от Games Rent
            </label>
          </div>
        </div>
        <div className={styles.submit}>
          <button className={styles.btn}>Регистрация</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
