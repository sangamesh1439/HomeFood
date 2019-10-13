import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

export const imageCarouselStyles = ScaledSheet.create({
  containerStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    bottom: -20,
  },

  parentView: {height: 200},

  carouselStyle: {backgroundColor: 'green'},

  imageBackground: {
    height: '200@ms',
  },
  linearGradientStyle: {
    height: '200@ms',
  },
  recipeTypeDecription: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: '30@ms',
    backgroundColor: 'transparent',
    color: colors.WHITE,
    paddingLeft: '10@ms',
    paddingBottom: '10@ms',
  },
});
