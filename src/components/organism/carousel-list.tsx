import { Dimensions, View } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

import CarouselCard from '../molecules/carousel-card';
import Header from '../molecules/header';
import { IUserList } from '../../interfaces/user-list.interface';
import { ICarouselList } from './interface';
const { width: screenWidth } = Dimensions.get('window');

const CarouselList = ({
  data,
  onSnapToItem,
  handleFavorite,
  favorites,
  handleRefresh,
}: ICarouselList) => {
  return (
    <>
      <Header />
      <Carousel
        data={data}
        renderItem={({ item }: { item: IUserList }) => (
          <CarouselCard
            item={item}
            handleFavorite={
              typeof handleFavorite == 'function' ? handleFavorite : () => {}
            }
            favorites={favorites}
            handleRefresh={handleRefresh}
          />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        swipeThreshold={0.1}
        layout='tinder'
        enableMomentum={true}
        decelerationRate={0.9}
        onSnapToItem={
          typeof handleFavorite == 'function' ? onSnapToItem : () => {}
        }
      />
    </>
  );
};

export default CarouselList;
