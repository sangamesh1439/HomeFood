import React from 'react';
import {View, FlatList} from 'react-native';
import {Restaurant} from './Restaurant/Restaurant';
import {styles} from '../../common/theme/styles';
import {restaurantsData} from '../../common/data';
import {restaurantsStyles} from './Restaurants.styles';
import { Icon, Container, Header, Item, Input, Button, Text } from 'native-base';
import { colors } from '../../common/theme/colors';

class RestaurantsComponent extends React.Component {
  render() {
    return (
      <View style={restaurantsStyles.container}>
        <Header style={{backgroundColor:colors.GREEN}} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon type="MaterialCommunityIcons" name="food" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <FlatList
          style={restaurantsStyles.flatList}
          data={restaurantsData}
          renderItem={({item}) => (
            <Restaurant {...this.props} restaurant={item} />
          )}
          keyExtractor={restaurant => restaurant.id}
        />
      </View>
    );
  }
}

RestaurantsComponent.navigationOptions = ({navigation, navigationOptions}) => {
  return {
    // title: 'Restaurants',
    // headerTitleStyle: styles.headerTextStyle,
    // headerStyle: {
    //   ...navigationOptions.headerStyle,
    //   // height: 100,
    // },
    header: null,
        headerRight: () => {
      // return <Icon name="search" style={restaurantsStyles.right} />;
    },
  };
};

export const Restaurants = RestaurantsComponent;
