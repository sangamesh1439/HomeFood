import React, { useState,useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { Icon } from 'native-base';
import { colors } from '../../../../common/theme/colors';
import {
  ImageCarousel,
  IconView,
  CurvedButton,
  Counter,
} from '../../../../common/components';
import StarRating from 'react-native-star-rating';
import { MakeReservationModal } from './MakeReservationModal/MakeReservationModal';
import { restaurantDetailsStyles } from './RestaurantDetails.styles';

const RestaurantDetailsComponent = props => {
  const [counterValue, updateCounterValue] = useState(2);
  const [priceList, updatePriceList] = useState({});
  const [total, updateTotal] = useState(0);

  const calculateTotal = (priceList)=>{
    let total = 0;
    Object.keys(priceList).map((index)=>{
      total = total + (priceList[index].qty * priceList[index].price);
    });
    updateTotal(total);
  }

  const {
    moreImages,
    name,
    reviews,
    moreDescription,
    time,
    food
  } = props.navigation.state.params.restaurant;

  useEffect(() => {
    let initialPriceList = {}
    food && food.map((foodItem, index) => {
      initialPriceList[index] = {
        price:foodItem.price,
        qty:1
      }
    });
    console.log('initialPriceList',initialPriceList);
    updatePriceList(initialPriceList);
    calculateTotal(initialPriceList);
}, [props])

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

      <View style={{ alignItems: "center",flex:1 ,justifyContent:"center"}}>
        {
          food && food.map((foodItem, index) => {
            if( Object.keys( priceList).length===0) return null;
            return (<View key={index} style={{ flexDirection: "row", paddingHorizontal: 20, width: "100%", alignItems: "center", alignContent: "space-between" }} key={index}>
              <View style={{ flex: 1 }}>
                <Text style={restaurantDetailsStyles.foodItemName}>{foodItem.name}</Text>
                {
                  foodItem.description != null && foodItem.length != 0 && <Text style={restaurantDetailsStyles.foodDescription}>{foodItem.description}</Text>
                }
              </View>

              <View style={{ flex: 1 }}>

                <Counter
                  counterValue={priceList[index].qty}
                  updateCounterValue={(value) => {
                    let newPriceList = { ...priceList, [index]: { ...priceList[index], qty: value } };
                    calculateTotal(newPriceList);
                    updatePriceList(newPriceList);
                  }}
                />
              </View>

              <View style={{ flex: 1, alignItems: "center" }}>

                <Text style={restaurantDetailsStyles.foodPrice}>{priceList[index].qty * priceList[index].price }</Text>
              </View>


            </View>)
          })
        }
        {
          <View style={{ alignItems: "center" }}>

          <Text style={restaurantDetailsStyles.totalPrice}>Total cost : {total}</Text>
        </View>
        }

        <CurvedButton
          title={'Pay & Order'}
          onPress={() => {
            Alert.alert('Successful!','Your order placed successfully.')
          }}
        />
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
