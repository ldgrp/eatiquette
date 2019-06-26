import * as React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import RecipeCarousel from 'components/carousel/RecipeCarousel';
import { BREAKFAST, LUNCH } from 'static/recipes';
import { colors } from 'styles/index.style';

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
                    firstItem={0}
                    activeSlideAlignment={'start'}
                    loop={false}/>
                <RecipeCarousel
                    title={'Lunch'}
                    entries={LUNCH}
                    firstItem={0}
                    activeSlideAlignment={'start'}
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
