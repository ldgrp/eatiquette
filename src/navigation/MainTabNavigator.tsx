import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Animated, Easing } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Buddy from 'screens/buddy/Buddy';
import Grocery from 'screens/grocery/Grocery';
import Home from 'screens/home/Home';
import MealPlan from 'screens/mealplan/MealPlan';
import Settings from 'screens/settings/Settings';
import Search from 'screens/home/Search';
import Recipe from 'screens/recipe/Recipe';
import FocusedRecipe from 'screens/recipe/FocusedRecipe';

import ModalScreen from 'screens/ModalScreen';

const HomeStack = createStackNavigator({
    Home,
    Search,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
};

const MealPlanStack = createStackNavigator({
    MealPlan,
});

MealPlanStack.navigationOptions = {
    tabBarLabel: 'Meal Plan',
};

const GroceryListStack = createStackNavigator({
    Grocery,
});

GroceryListStack.navigationOptions = {
    title: 'Grocery List',
    tabBarLabel: 'Grocery List',
};

const BuddyStack = createStackNavigator({
    Buddy,
});

BuddyStack.navigationOptions = {
    tabBarLabel: 'Buddy',
};

const SettingsStack = createStackNavigator({
    Settings,
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
//        initialRouteName: 'GroceryListStack',
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

const App = createStackNavigator(
    {
        Tab,
        Recipe,
    },
    {
        headerMode: 'none'
    }
)

export default createStackNavigator(
    {
        App,
        FocusedRecipe,
        Modal: ModalScreen,
    },
    {
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
    },
);
