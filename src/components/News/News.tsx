import React from 'react';

import styles from '@/components/News/News.module.scss';

import NewsBlock from '@/components/News/NewsBlock/NewsBlock';
import Reserve from '@/components/Home/Reserve/Reserve';
import Empty from '@/components/News/NewsEmpty/NewsEmpty';

type NewsType = {
  id: number;
  title: string;
  description: string;
  img: string;
  created: string;
};

const news: NewsType[] = [
  {
    id: 1,
    title: 'Assassin`s Creed Mirage',
    description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
    img: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg',
    created: '05.10.23',
  },
  {
    id: 2,
    title: 'Assassin`s Creed Mirage',
    description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
    img: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg',
    created: '05.10.23',
  },
  {
    id: 3,
    title: 'Assassin`s Creed Mirage',
    description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
    img: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg',
    created: '05.10.23',
  },
  {
    id: 4,
    title: 'Assassin`s Creed Mirage',
    description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
    img: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg',
    created: '05.10.23',
  },
  {
    id: 5,
    title: 'Assassin`s Creed Mirage',
    description: 'Сегодня состоялся долгожданной релиз Assassin`s Creed Mirage',
    img: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/11/assassins-creed-mirage-real-gambling-ubisoft-forward-reveal.jpg',
    created: '05.10.23',
  },
];

const News: React.FC = () => {
  if (news.length === 0) {
    return (
      <>
        <Empty />
      </>
    );
  }

  return (
    <>
      <div className={styles.title}>Новости</div>
      {news.map((e: NewsType) => {
        return <NewsBlock key={e.id} {...e} />;
      })}
      <Reserve />
    </>
  );
};

export default News;
