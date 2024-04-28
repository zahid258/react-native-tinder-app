import { Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IMAGES } from '../../constants/images';
import { ICarouselCard } from '../carousel-card/interface';
import { theme } from '../../../config/theme';
import { styles } from './styles';

const CarouselFooter = ({
  item,
  handleFavorite,
  handleRefresh,
  favorites,
}: ICarouselCard) => {
  return (
    <View style={styles.renderFooterContainer}>
      {!favorites ? (
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleRefresh}
            style={styles.iconContainer}
          >
            <View style={styles.ctaIconContainer}>
              <Foundation
                name='refresh'
                size={hp(3.5)}
                color={theme.color.grey.secondary}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.ctaContainerWrapper}
            onPress={() => handleFavorite!(false, item.id)}
          >
            <View style={styles.ctaContainer}>
              <Entypo
                name='cross'
                size={hp(6)}
                color={theme.color.theme.original}
              />
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={favorites ? styles.actionContainerWrapper : styles.iconContainer}
        onPress={() => handleFavorite!(true, item.id)}
      >
        <View style={styles.ctaContainer}>
          <Image
            source={IMAGES.FAVORITE}
            style={[
              styles.favoriteImage,
              {
                tintColor: theme.color.green.original,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CarouselFooter;
