import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import BuddyScreen from '../screens/BuddyScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import HomeScreen from '../screens/HomeScreen';
import MealPlanScreen from '../screens/MealPlanScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
};

const MealPlanStack = createStackNavigator({
    MealPlan: MealPlanScreen,
});

MealPlanStack.navigationOptions = {
    tabBarLabel: 'Meal Plan',
};

const GroceryListStack = createStackNavigator({
    GroceryList: GroceryListScreen,
});

GroceryListStack.navigationOptions = {
    title: 'Grocery List',
    tabBarLabel: 'Grocery List',
};

const BuddyStack = createStackNavigator({
    Buddy: BuddyScreen,
});

BuddyStack.navigationOptions = {
    tabBarLabel: 'Buddy',
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
};

export default createBottomTabNavigator(
    {
        HomeStack,
        MealPlanStack,
        GroceryListStack,
        BuddyStack,
        SettingsStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;

                let IconComponent = Ionicons;
                let iconName = 'ios-information';
                const size = 25;

                if (routeName === 'HomeStack') {
                    iconName = 'ios-home';
                } else if (routeName === 'MealPlanStack') {
                    IconComponent = MaterialCommunityIcons;
                    iconName = 'food';
                } else if (routeName === 'GroceryListStack') {
                    IconComponent = MaterialCommunityIcons;
                    iconName = 'cart';
                } else if (routeName === 'BuddyStack') {
                    iconName = 'md-people';
                } else if (routeName === 'SettingsStack') {
                    iconName = 'ios-settings';
                }
                return <IconComponent name={iconName} size={size} color={tintColor} style={{ marginTop: 6 }}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#2AC940',
            inactiveTintColor: 'gray',
        },
    },
);
