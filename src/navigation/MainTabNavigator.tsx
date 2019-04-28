import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Animated, Easing } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import BuddyScreen from '../screens/BuddyScreen';
import GroceryListScreen from '../screens/GroceryListScreen';
import HomeScreen from '../screens/HomeScreen';
import MealPlanScreen from '../screens/MealPlanScreen';
import SettingsScreen from '../screens/SettingsScreen';

import ModalScreen from '../screens/ModalScreen';

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

const Tab = createBottomTabNavigator(
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

export default createStackNavigator({
    TabNavigator: Tab,
    Modal: ModalScreen,
},                                  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    transitionConfig: () => ({
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const thisSceneIndex = scene.index;

            const height = layout.initHeight;
            const translateY = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                outputRange: [0, 1, 0.2],
            });

            return { opacity, transform: [{ translateY }] };
        },
    }),
});
