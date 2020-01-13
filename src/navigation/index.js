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

const restaurantsNavigator = createStackNavigator(
  {
    Restaurants: Restaurants,
    RESTAURANT_DETAILS_SCREEN: RestaurantDetails,
  },
  {defaultNavigationOptions},
);

const HomeNavigator = createBottomTabNavigator(
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
    recipesNavigator: {
      screen: recipesNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon type="Feather" name="smartphone" style={{color: tintColor}} />
        ),
      },
    },
    profile: {
      screen: () => {
        return (
          <WebView
            source={{
              uri: 'https://www.linkedin.com/in/sangamesh-somawar-39973a86/',
            }}
          />
        );
      },
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            type={'MaterialCommunityIcons'}
            name={'ninja'}
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

export const RootNavigator = createAppContainer(HomeNavigator);
