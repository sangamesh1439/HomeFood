import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../common/theme/colors';
import StarRating from 'react-native-star-rating';
import {orderStyles} from './Order.styles';

const OrderComponent = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(RESTAURANT_DETAILS_SCREEN, {
          order: props.order,
        });
      }}>
      <View style={orderStyles.container}>
        <View style={orderStyles.subContainer}>
          <Text style={orderStyles.name}>{props.order.name}</Text>
          <Text style={orderStyles.type}>Status: {props.order.status}</Text>
          <Text style={orderStyles.type}>Price: {props.order.price}</Text>
        </View>
        <View style={orderStyles.imageContainer}>
          <Image
            style={orderStyles.image}
            source={{uri: props.order.uri}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Order = OrderComponent;
