import React from 'react';
import { Text, View } from 'react-native';


class RestaurantsComponent extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Restaurants!</Text>
        </View>
      );
    }
  }

export const Restaurants = RestaurantsComponent;
