import * as React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';

import RecipeSearchBar from 'components/home/RecipeSearchBar';
import SearchResults from 'components/home/SearchResults';
import SearchSpinner from 'components/home/SearchSpinner';
import { store } from 'store/index';
import { invalidateSearch } from 'store/search/actions';
import { colors } from 'styles/index.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
    navigation: NavigationComponent
}

export default class SearchScreen extends React.Component<Props> {
    static navigationOptions = {
        header: null,
    };

    componentWillUnmount() {
        store.dispatch(invalidateSearch());
    }

    render() {
        return (
            <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.header}>
                    <RecipeSearchBar />
                </View>
                <SearchSpinner/>
                <SearchResults/>

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
        padding: SCREEN_WIDTH * 0.02,
    },
});
