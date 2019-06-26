import * as React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';

import RecipeCarousel from 'components/carousel/RecipeCarousel';
import FeaturedCard from 'components/FeaturedCard';
import Header from 'components/home/Header';
import SearchIcon from 'components/home/SearchIcon';
import { BREAKFAST, LUNCH } from 'static/recipes';
import { colors } from 'styles/index.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
    navigation: NavigationComponent
}

export default class HomeScreen extends React.Component<Props> {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.main}>
                <StatusBar hidden={false}/>
                <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
                    <View style={styles.header}>
                        <Header date={new Date()}/>
                        <SearchIcon onPress={() => navigation.navigate('Search')}/>
                    </View>
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
        paddingTop: 20,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        padding: SCREEN_WIDTH * 0.04,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchIcon: {

    },
});
