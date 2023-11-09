'use client';

import React from 'react';
import { useAppDispatch } from '@/redux/store';
import { useInView } from 'react-intersection-observer';

import { setIsChangeHeader } from '@/redux/scroll/slice';

import CarouselSwiper from '@/instruments/CarouselSwiper/CarouselSwiper';
import Info from '@/components/Home/Info/Info';
import Novelty from '@/components/Home/Novelty/Novelty';
import Question from '@/components/Home/Question/Question';
import SocialNetwork from '@/components/Home/SocialNetwork/SocialNetwork';
import Reserve from '@/components/Home/Reserve/Reserve';

const Home = () => {
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    dispatch(setIsChangeHeader(inView));

    return () => {
      dispatch(setIsChangeHeader(false));
    };
  }, [inView, dispatch]);

  return (
    <div>
      <CarouselSwiper />
      <div ref={ref}>
        <Info />
        <Novelty />
        <Question />
        <SocialNetwork />
        <Reserve />
      </div>
    </div>
  );
};

export default Home;
