import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MealPlanScreen from '../screens/MealPlanScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
}

const MealPlanStack = createStackNavigator({
    MealPlan: MealPlanScreen,
});

MealPlanStack.navigationOptions = {
    tabBarLabel: 'Meal Plan'
};


export default createBottomTabNavigator({
    HomeStack,
    MealPlanStack,
});
