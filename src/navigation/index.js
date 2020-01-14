import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {TypesOfRecipes} from '../Home/TypesOfRecipes/TypesOfRecipes';
import {Restaurants} from '../Home/Restaurants/Restaurants';
import {createStackNavigator} from 'react-navigation-stack';
import {RecipeList} from '../Home/TypesOfRecipes/RecipeType/RecipeList/RecipeList';
import {Recipe} from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/Recipe';
import {Icon} from 'native-base';
import {colors} from '../common/theme/colors';
import {RecipeDetails} from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/RecipeDetails/RecipeDetails';
import {RestaurantDetails} from '../Home/Restaurants/Restaurant/RestaurantDetails/RestaurantDetails';
import {WebView} from 'react-native-webview';
import { Orders } from '../Home/Orders/Orders';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { Profile } from '../Profile/Profile';
import { UpdateTodaysMenu } from '../UpdateTodaysMenu/UpdateTodaysMenu';

const defaultNavigationOptions = props => {
  return {
    headerStyle: {
      backgroundColor: colors.GREEN,
    },
    headerTintColor: 'white',
  };
};

const recipesNavigator = createStackNavigator(
  {
    TypesOfRecipes: TypesOfRecipes,
    RECIPE_LIST_SCREEN: RecipeList,
    RECIPE_SCREEN: Recipe,
    RECIPE_DETAILS_SCREEN: RecipeDetails,
  },
  {defaultNavigationOptions},
);

const ordersNavigator = createStackNavigator(
  {
    orders: Orders,
  },
  {defaultNavigationOptions},
);

const restaurantsNavigator = createStackNavigator(
  {
    Restaurants: Restaurants,
    RESTAURANT_DETAILS_SCREEN: RestaurantDetails,
  },
  {defaultNavigationOptions},
);

const loginNavigator = createStackNavigator({
  Login: {
      screen: Login,
      navigationOptions: {
          header: null
      }
  },
  SignUp: {
      screen: SignUp,
      navigationOptions: {
          header: null
      }
  }
})

const UserNavigator = createBottomTabNavigator(
  {
    
    restaurantsNavigator: {
      screen: restaurantsNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'MaterialIcons'}
            name={'restaurant-menu'}
            style={{color: tintColor}}
          />
        ),
      },
    },
    ordersNavigator: {
      screen: ordersNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Feather" name="smartphone" style={{color: tintColor}} />
        ),
      },
    },
    profile: {
      screen:Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'MaterialCommunityIcons'}
            name={'face-profile'}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.GREEN,
    },
  },
);

const HouseWifeNavigator = createBottomTabNavigator(
  {
    
    UpdateTodaysMenu: {
      screen: UpdateTodaysMenu,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'MaterialCommunityIcons'}
            name={'shape-rectangle-plus'}
            style={{color: tintColor}}
          />
        ),
      },
    },
    ordersNavigator: {
      screen: ordersNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="FontAwesome" name="reorder" style={{color: tintColor}} />
        ),
      },
    },
    profile: {
      screen:Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'MaterialCommunityIcons'}
            name={'face-profile'}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.GREEN,
    },
  },
);

const rootNavigator = createAnimatedSwitchNavigator(
  {
      LoginNavigator: loginNavigator,
      UserNavigator: UserNavigator,
      HouseWifeNavigator: HouseWifeNavigator
  },
  {
      transition: (
          <Transition.Together>
              <Transition.Out
                  type="fade"
                  durationMs={400}
                  interpolation="easeIn"
              />
              <Transition.In type="fade" durationMs={500} />
          </Transition.Together>
      ),
  }
);

export const RootNavigator = createAppContainer(rootNavigator);
