import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../common/theme/colors';
import StarRating from 'react-native-star-rating';
import {RESTAURANT_DETAILS_SCREEN} from './RestaurantDetails/RestaurantDetails';
import {restaurantStyles} from './Restaurant.styles';

const RestaurantComponent = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(RESTAURANT_DETAILS_SCREEN, {
          restaurant: props.restaurant,
        });
      }}>
      <View style={restaurantStyles.container}>
        <View style={restaurantStyles.subContainer}>
          <Text style={restaurantStyles.name}>{props.restaurant.name}</Text>
          <Text style={restaurantStyles.type}>{props.restaurant.address}</Text>
          <View style={restaurantStyles.startRatingContainer}>
            <View style={restaurantStyles.starRating}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={2.4}
                emptyStarColor={colors.GREEN_LIGHT}
                starSize={20}
                fullStarColor={colors.GREEN}
              />
            </View>
            <Text style={restaurantStyles.reviews}>
              {props.restaurant.reviews} reviews
            </Text>
          </View>
        </View>
        <View style={restaurantStyles.imageContainer}>
          <Image
            style={restaurantStyles.image}
            source={{uri: props.restaurant.uri}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Restaurant = RestaurantComponent;
