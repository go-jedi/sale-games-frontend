'use client';

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import styles from '@/instruments/SliderImage/SliderImage.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import SurfsharkImage from '@/assets/img/surfsharkvpn.png';
import FootBallManager from '@/assets/img/footbalmanager24.jpg';
import GrandTheftAuth from '@/assets/img/grandtheftauth.jpg';
import AssasinsCreed from '@/assets/img/assasinscreed.jpg';
import EaSportFc from '@/assets/img/easportfc24.jpg';

import SliderImageSkeleton from '@/instruments/SliderImage/SliderImageSkeleton/SliderImageSkeleton';

const SliderImage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <SliderImageSkeleton />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className={styles.slider}>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={SurfsharkImage}
              priority={true}
              alt={'Background Image'}
            />
            <div className={styles.block}>Surfshark VPN</div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={FootBallManager}
              priority={true}
              alt={'Background Image'}
            />
            <div className={styles.block}>Football Manager 2024</div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={GrandTheftAuth}
              priority={true}
              alt={'Background Image'}
            />
            <div className={styles.block}>Grand Theft Auto V</div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={AssasinsCreed}
              priority={true}
              alt={'Background Image'}
            />
            <div className={styles.block}>Assassin`s Creed Mirage</div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={EaSportFc}
              priority={true}
              alt={'Background Image'}
            />
            <div className={styles.block}>EA Sports FC 24 - Ultimate Edition ssssssssss</div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default SliderImage;
