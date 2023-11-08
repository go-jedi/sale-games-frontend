import React from 'react';

import CarouselSwiper from '@/instruments/CarouselSwiper/CarouselSwiper';
import Info from '@/components/Home/Info/Info';
import Novelty from '@/components/Home/Novelty/Novelty';

const Home = () => {
  return (
    <div>
      <CarouselSwiper />
      <Info />
      <Novelty />
    </div>
  );
};

export default Home;
