import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../common/theme/colors';

export const ordersStyles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE_LIGHT},
  flatList: {padding: '15@ms'},
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: 'white',
    fontSize: '25@ms',
    padding: '15@ms',
  },
});
