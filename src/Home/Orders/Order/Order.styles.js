import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../common/theme/colors';

export const orderStyles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: '15@ms',
    justifyContent: 'center',
    alignItems:"center",
    padding: '15@ms',
    height: '110@ms',
    borderRadius: '15@ms',
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  imageContainer: {alignSelf: 'center'},
  name: {fontSize: '15@ms'},
  type: {opacity: 0.5, fontSize: '15@ms'},
  startRating: {width: '100@ms', height: '10@ms'},
  startRatingContainer: {flexDirection: 'row', paddingTop: '15@ms'},
  subContainer: {
    flex: 1,
  },
  reviews: {opacity: 0.5, fontSize: '15@ms', marginLeft: '10@ms'},
  image: {width: '100@ms', borderRadius: '15@ms', height: 80},
});
