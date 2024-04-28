import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView, Dimensions } from 'react-native';

import { styles } from './styles';
import Header from '../../../components/molecules/header';
import { useUserLikeList } from '../../../react-query/hooks/user-like-list';
import CarouselCard from '../../../components/molecules/carousel-card';
import CarouselList from '../../../components/organism/carousel-list';

const { width: screenWidth } = Dimensions.get('window');

const Favorites = (): React.JSX.Element => {
  const { data } = useUserLikeList();

  return (
    <SafeAreaView style={styles.container}>
      <CarouselList data={data} favorites={true} />
    </SafeAreaView>
  );
};

export default Favorites;
