import React from 'react';

import CarouselSwiper from '@/instruments/CarouselSwiper/CarouselSwiper';
import Info from '@/components/Home/Info/Info';
import Novelty from '@/components/Home/Novelty/Novelty';
import Question from '@/components/Home/Question/Question';
import SocialNetwork from '@/components/Home/SocialNetwork/SocialNetwork';
import Reserve from '@/components/Home/Reserve/Reserve';

const Home = () => {
  return (
    <div>
      <CarouselSwiper />
      <Info />
      <Novelty />
      <Question />
      <SocialNetwork />
      <Reserve />
    </div>
  );
};

export default Home;
