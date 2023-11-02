'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';

import styles from '@/instruments/Carousel/Carousel.module.scss';

import Planet from '@/assets/img/planet.webp';
import StarWars from '@/assets/img/starwars.webp';
import Hogwarts from '@/assets/img/hogwarts.webp';

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      effect="fade"
      dotPosition="right"
      waitForAnimate
      dots
      autoplay
      speed={2000}
      autoplaySpeed={5000}>
      <div>
        <h3 className={styles.content}>
          <Image className={styles.image} src={Planet} priority={true} alt="planet" />
          <div className={styles.block}>
            <div className={styles.title}>STARFIELD</div>
            <div className={styles.btn}>
              <button>Подробнее</button>
            </div>
          </div>
        </h3>
      </div>
      <div>
        <h3 className={styles.content}>
          <Image className={styles.image} src={StarWars} priority={true} alt="starWars" />
          <div className={styles.block}>
            <div className={styles.title}>Star Wars</div>
            <div className={styles.btn}>
              <button>Подробнее</button>
            </div>
          </div>
        </h3>
      </div>
      <div>
        <h3 className={styles.content}>
          <Image className={styles.image} src={Hogwarts} priority={true} alt="hogwarts" />
          <div className={styles.block}>
            <div className={styles.title}>Hogwarts Legacy</div>
            <div className={styles.btn}>
              <button>Подробнее</button>
            </div>
          </div>
        </h3>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
