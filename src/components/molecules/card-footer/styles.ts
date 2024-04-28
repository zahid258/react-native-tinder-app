import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  renderFooterContainer: {
    width: '90%',
    alignSelf: 'center',
    height: '10%',
    flexDirection: 'row',
    bottom: hp(4.5),
    alignItems: 'center',
  },
  ctaContainer: {
    width: hp(7.7),
    height: hp(7.7),
    borderRadius: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme?.color.white.original,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  ctaIconContainer: {
    width: hp(5.8),
    height: hp(5.8),
    borderRadius: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme?.color.white.original,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  favoriteImage: {
    width: hp(4.5),
    height: hp(4.5),
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: hp(20),
    padding: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: hp(2.4),
    fontWeight: 'bold',
  },
  text: {
    fontSize: hp(1.6),
  },
  iconContainer: {
    width: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaContainerWrapper: {
    width: '64%',
    justifyContent: 'center',
    paddingLeft: hp(2),
  },
  actionContainerWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
