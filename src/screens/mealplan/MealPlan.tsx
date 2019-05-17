import * as React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, Dimensions } from 'react-native';
import { colors } from 'styles/index.style';
import RecipeCarousel from 'components/carousel/RecipeCarousel';
import { BREAKFAST, LUNCH } from 'static/recipes';

export default class RecipeScreen extends React.Component {
    static navigationOptions = {
        title: 'Meal Plan',
    };

    render() {
        return (
            <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container}>
                <RecipeCarousel
                    title={'Breakfast'}
                    entries={BREAKFAST}
                    activeSlideAlignment={'center'}
                    loop={false}/>
                <RecipeCarousel
                    title={'Lunch'}
                    entries={LUNCH}
                    activeSlideAlignment={'center'}
                    loop={false}/>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const SCREEN_WIDTH = Dimensions.get('window').width;

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

