import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import { IMAGES } from '../../constants/images';

const Header = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <FastImage
        resizeMode='contain'
        source={IMAGES?.TINDER}
        style={styles.image}
      />
    </View>
  );
};

export default Header;
