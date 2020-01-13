import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../common/theme/colors';

export const restaurantDetailsStyles = ScaledSheet.create({
  container: {backgroundColor: colors.WHITE_LIGHT, flex: 1},
  row: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  peopleCount: {color: colors.GREEN, textAlign: 'center'},
  foodItemName: { color: colors.GREEN, fontSize: '16@ms' },
  foodDescription: { color: colors.GREEN, fontSize: '12@ms' },
  foodPrice: { alignItems:"center", color: colors.GREEN, fontSize: '16@ms' },
  totalPrice: { color: colors.GREEN, fontSize: '20@ms' },
  description: {
    marginRight: '20@ms',
    marginLeft: '20@ms',
    margin: '5@ms',
    padding: '15@ms',
    backgroundColor: colors.WHITE,
    borderRadius: '15@ms',
  },
  title: {fontSize: '30@ms'},
  titleContainer: {
    marginRight: '20@ms',
    marginLeft: '20@ms',
    margin: '5@ms',
    padding: '15@ms',
    backgroundColor: colors.WHITE,
    borderRadius: '15@ms',
  },
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerRight: {color: colors.WHITE, fontSize: '25@ms', padding: '10@ms'},
});
