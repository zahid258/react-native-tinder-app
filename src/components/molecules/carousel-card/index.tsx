import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { theme } from '../../../config/theme';
import { BASE_URL } from '../../../common/constant';
import { ICarouselCard } from './interface';
import { styles } from './styles';
import CarouselFooter from '../card-footer';

const CarouselCard = ({
  item,
  handleFavorite,
  favorites,
  handleRefresh,
}: ICarouselCard) => {
  return (
    <View style={styles.cardContainer}>
      <FastImage
        resizeMode='cover'
        source={{ uri: `${BASE_URL}${item?.picture}` }}
        style={styles.image}
      >
        <View style={styles.imageInfoContainer}>
          <Text style={styles.name}>
            {item?.name}
            <Text style={styles.age}> {item?.age}</Text>
          </Text>

          <View style={styles.locationWrapper}>
            <SimpleLineIcons
              name='location-pin'
              size={hp(2)}
              color={theme.color.white.original}
            />
            <Text style={styles.distance}>24km {item?.location}</Text>
          </View>
        </View>
      </FastImage>
      <CarouselFooter
        item={item}
        handleFavorite={handleFavorite}
        favorites={favorites}
        handleRefresh={handleRefresh}
      />
    </View>
  );
};

export default CarouselCard;
