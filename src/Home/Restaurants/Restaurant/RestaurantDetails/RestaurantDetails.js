import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';
import {colors} from '../../../../common/theme/colors';
import {
  ImageCarousel,
  IconView,
  CurvedButton,
  Counter,
} from '../../../../common/components';
import StarRating from 'react-native-star-rating';
import {MakeReservationModal} from './MakeReservationModal/MakeReservationModal';
import {restaurantDetailsStyles} from './RestaurantDetails.styles';

const RestaurantDetailsComponent = props => {
  const [counterValue, updateCounterValue] = useState(2);

  const {
    moreImages,
    name,
    reviews,
    moreDescription,
    time,
    food
  } = props.navigation.state.params.restaurant;
  const [
    makeReservationModalVisible,
    setMakeReservarionModalVisibility,
  ] = useState(false);
  return (
    <View style={restaurantDetailsStyles.container}>
      <ImageCarousel images={moreImages} title={name} />

      <View style={restaurantDetailsStyles.row}>
        <IconView type={'FontAwesome'} name={'rupee'} description={'40₹-50₹'} />

        <View>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={2.4}
            emptyStarColor={colors.GREEN_LIGHT}
            starSize={20}
            fullStarColor={colors.GREEN}
          />
          <Text style={restaurantDetailsStyles.peopleCount}>
            {reviews} people
          </Text>
        </View>
        <IconView type={'MaterialIcons'} name={'verified-user'} description={'verified-user'} />
      </View>

      <CurvedButton
        title={'Make Reservation'}
        onPress={() => {
          setMakeReservarionModalVisibility(true);
        }}
      />

      <MakeReservationModal
        restaurant={props.navigation.state.params.restaurant}
        visible={makeReservationModalVisible}
        hideModal={() => {
          setMakeReservarionModalVisibility(false);
        }}
      />

      <View style={restaurantDetailsStyles.description}>
        <Text>{moreDescription.description}</Text>
      </View>
      <View style={{alignItems:"center"}}>
        {
           food && food.map((foodItem, index) => {
            return (<View style={{flexDirection:"row", paddingHorizontal:20, width:"100%", alignItems:"space-between",alignContent:"flex-start"}} key={index}>
              <View style={{flex:1}}>
              <Text style={restaurantDetailsStyles.foodItemName}> {foodItem.name} </Text>
              {
                foodItem.description != null && foodItem.length != 0 && <Text style={restaurantDetailsStyles.foodDescription}> {foodItem.description} </Text>
              }
              </View>
             
              <Counter
                counterValue={counterValue}
                updateCounterValue={updateCounterValue}
              />
                             <Text style={restaurantDetailsStyles.foodPrice}> {foodItem.price} </Text>

            </View>)
          })
        }
      </View>

      
      <View style={restaurantDetailsStyles.titleContainer}>
        <Text style={restaurantDetailsStyles.title}>
          {moreDescription.title}
        </Text>
        <Text>{moreDescription.description}</Text>
      </View>
    </View>
  );
};

RestaurantDetailsComponent.navigationOptions = {
  headerTransparent: true,
  headerStyle: restaurantDetailsStyles.headerStyle,
  headerRight: () => {
    return (
      <Icon
        type="Feather"
        name="bookmark"
        style={restaurantDetailsStyles.headerRight}
      />
    );
  },
};

export const RESTAURANT_DETAILS_SCREEN = 'RESTAURANT_DETAILS_SCREEN';
export const RestaurantDetails = RestaurantDetailsComponent;
