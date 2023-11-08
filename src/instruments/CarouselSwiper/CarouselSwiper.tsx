'use client';

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

import styles from '@/instruments/CarouselSwiper/CarouselSwiper.module.scss';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import Planet from '@/assets/img/planet.webp';
import StarWars from '@/assets/img/starwars.webp';
import Hogwarts from '@/assets/img/hogwarts.webp';

const CarouselSwiper: React.FC = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        className={styles.carousel}>
        <SwiperSlide>
          <Image className={styles.image} src={Planet} priority={true} alt="planet" />
          <div className={styles.block}>
            <div className={styles.title}>STARFIELD</div>
            <div className={styles.btn}>
              <button>Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={StarWars} priority={true} alt="starWars" />
          <div className={styles.block}>
            <div className={styles.title}>Star Wars</div>
            <div className={styles.btn}>
              <button>Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.image} src={Hogwarts} priority={true} alt="hogwarts" />
          <div className={styles.block}>
            <div className={styles.title}>Hogwarts Legacy</div>
            <div className={styles.btn}>
              <button>Подробнее</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
