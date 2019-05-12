import * as React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import FeaturedCard from 'components/FeaturedCard';

import RecipeCarousel from 'components/carousel/RecipeCarousel';

import Header from 'components/home/Header';

import { colors } from 'styles/index.style';

import { BREAKFAST, LUNCH } from 'static/recipes';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <SafeAreaView style={styles.main}>
                <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
                    <Header date={new Date()}/>
                    <FeaturedCard
                        image={require('../../../assets/raspberry.jpg')}
                        title="Raspberry Berry Summer"
                        subtitle="Collections"/>
                    <RecipeCarousel title={'Breakfast'} entries={BREAKFAST}/>
                    <RecipeCarousel title={'Lunch'} entries={LUNCH}/>
                    <View style={{ height:20 }}>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        padding: SCREEN_WIDTH * 0.04,
    },
});
