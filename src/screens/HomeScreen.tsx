import * as React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import FeaturedCard from '../components/FeaturedCard';
import RecipeCarousel from '../components/RecipeCarousel';

import HeaderDateText from '../components/text/HeaderDateText';
import HeaderText from '../components/text/HeaderText';

import { colors } from '../styles/index.style';

import { BREAKFAST, LUNCH } from '../static/recipes';

const SCREEN_WIDTH = Dimensions.get('window').width;

const NAMED_DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const NAMED_MONTH = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const date = new Date();
        const day = date.getDate();
        const namedMonth = NAMED_MONTH[date.getMonth()];
        const namedDay = NAMED_DAY[date.getDay()];

        return (
            <SafeAreaView style={styles.main}>
                <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
                    <View style={styles.header}>
                        <HeaderDateText>{day} {namedMonth}</HeaderDateText>
                        <HeaderText>{namedDay}</HeaderText>
                    </View>
                    <FeaturedCard
                        image={require('../../assets/raspberry.jpg')}
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
    header: {
    },
});
