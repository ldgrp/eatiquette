import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MealPlanScreen from '../screens/MealPlanScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import BuddyScreen from '../screens/BuddyScreen';
import SettingsScreen from '../screens/SettingsScreen';

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

const GroceryListStack = createStackNavigator({
    GroceryList: GroceryListScreen,
});

GroceryListStack.navigationOptions = {
    tabBarLabel: 'Grocery List'
};

const BuddyStack = createStackNavigator({
    Buddy: BuddyScreen,
});

BuddyStack.navigationOptions = {
    tabBarLabel: 'Buddy'
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings'
};

export default createBottomTabNavigator({
    HomeStack,
    MealPlanStack,
    GroceryListStack,
    BuddyStack,
    SettingsStack,
},
{
    initialRouteName: "HomeStack"
});
