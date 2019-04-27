import * as React from 'react';
import { 
    Dimensions,
    SafeAreaView,
    Text, 
    ScrollView,
    StyleSheet,
    View 
} from 'react-native';
import RecipeCarousel from '../components/RecipeCarousel';
import FeaturedCard from '../components/FeaturedCard';

import HeaderText from '../components/text/HeaderText';
import HeaderDateText from '../components/text/HeaderDateText';

import { colors } from '../styles/index.style';

import { BREAKFAST, LUNCH } from '../static/recipes';


let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

const NAMED_DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const NAMED_MONTH = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        let date = new Date();
        let day = date.getDate();
        let namedMonth = NAMED_MONTH[date.getMonth()];
        let namedDay = NAMED_DAY[date.getDay()];

        return (
            <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
            <View style={styles.header}>
                <HeaderDateText>{day} {namedMonth}</HeaderDateText>
                <HeaderText>{namedDay}</HeaderText>
            </View>
            <FeaturedCard image={require('../../assets/raspberry.jpg')} title="Strawberry Berry Summer" subtitle="Collections"/>
            <RecipeCarousel title={"Breakfast"} entries={BREAKFAST}/>
            <RecipeCarousel title={"Lunch"} entries={LUNCH}/>
            <View style={{height:20}}>
                
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
    }
});
