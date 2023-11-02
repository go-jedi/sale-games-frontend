import React from 'react';

import styles from '@/app/page.module.scss';

import CarouselComponent from '@/instruments/Carousel/Carousel';

const RootPage: React.FC = () => {
  return (
    <div>
      <CarouselComponent />
    </div>
  );
};

export default RootPage;
