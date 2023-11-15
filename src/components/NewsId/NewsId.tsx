'use client';

import React from 'react';

import styles from '@/components/NewsId/NewsId.module.scss';

import NewsIdSkeleton from '@/components/NewsId/NewsIdSkeleton/NewsIdSkeleton';
import CardSkeleton from '@/components/NewsId/Card/CardSkeleton/CardSkeleton';

import Card from '@/components/NewsId/Card/Card';
import Reserve from '@/components/Home/Reserve/Reserve';

const NewsId: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.newsid}>
      {loading ? (
        <NewsIdSkeleton />
      ) : (
        <>
          <div className={styles.title}>
            Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage
          </div>
          <div className={styles.block}>
            <div className={styles.text}>
              Вышла долгожданная игра Assassin`s Creed Mirage,в которую уже можно сыграть на
              консолях PlayStation и Xbox, а также на компьютерах через платформу Ubisoft Connect
            </div>
            <div className={styles.subtitle}>Сюжет</div>
            <div className={styles.text}>
              Эта часть Assassin`s Creed рассказывает историю молодого Басима, популярного персонажа
              из Assassin’s Creed Valhalla. Действие игры разворачивается в захватывающем Багдаде
              9-го века. Чтобы достичь `платинового` статуса, придется потратить около 24 часов на
              полное прохождение игры.
            </div>
            <div className={styles.subtitle}>Продолжительность</div>
            <div className={styles.text}>
              Mirage представляет собой возврат к корням серии: небольшое приключение
              продолжительностью около 15-20 часов, с акцентом на скрытом прохождении и кодексе
              ассасинов. Критики уже высоко оценили игру и признали ее достойной частью франшизы.
              Средняя оценка на Metacritic составила 77 баллов.
            </div>
          </div>
        </>
      )}
      <div className={styles.card}>{loading ? <CardSkeleton /> : <Card />}</div>
      <Reserve />
    </div>
  );
};

export default NewsId;
