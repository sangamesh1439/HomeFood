import React from 'react';
import {View, FlatList} from 'react-native';
import {Order} from './Order/Order';
import {styles} from '../../common/theme/styles';
import {ordersData} from '../../common/data';
import {ordersStyles} from './Orders.styles';
import { Icon, Container, Header, Item, Input, Button, Text } from 'native-base';
import { colors } from '../../common/theme/colors';

class OrdersComponent extends React.Component {
  render() {
    return (
      <View style={ordersStyles.container}>
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
          style={ordersStyles.flatList}
          data={ordersData}
          renderItem={({item}) => (
            <Order {...this.props} order={item} />
          )}
          keyExtractor={restaurant => restaurant.id}
        />
      </View>
    );
  }
}

OrdersComponent.navigationOptions = ({navigation, navigationOptions}) => {
  return {
    // title: 'Orders',
    // headerTitleStyle: styles.headerTextStyle,
    // headerStyle: {
    //   ...navigationOptions.headerStyle,
    //   // height: 100,
    // },
    header: null,
        headerRight: () => {
      // return <Icon name="search" style={ordersStyles.right} />;
    },
  };
};

export const Orders = OrdersComponent;
