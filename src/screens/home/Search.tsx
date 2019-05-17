import { NavigationComponent } from 'react-navigation';
import * as React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { colors } from 'styles/index.style';
import RecipeCard from 'components/RecipeCard';
import { RECIPES } from 'static/recipes';
import { Recipe } from 'store/recipes/types';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
    navigation: NavigationComponent
}

interface State {
    search: string,
}

const SearchBarIcon = () => (
    <Ionicons name="ios-search" size={20} color={'rgba(0,0,0,0.2)'}/>
)
export default class SearchScreen extends React.Component<Props, State> {
    static navigationOptions = {
        header: null,
    };

    search!: SearchBar;

    state = {
        search: '',
    };

    updateSearch = (search: string) => {
        this.setState({ search });
    }

    onCancel = () => {
        console.log("lol")
        this.props.navigation.goBack();
    }

    render() {
        const { navigation } = this.props;
        const { search } = this.state;

        return (
            <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.header}>
                <SearchBar
                    placeholder="Search"
                    onChangeText={this.updateSearch}
                    lightTheme={true}
                    platform={'ios'}
                    searchIcon={SearchBarIcon}
                    value={search}
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.searchInputContainer}
                    onCancel={this.onCancel}
                />
                </View>

                {
                    RECIPES.map((recipe: Recipe, i: number) => 
                    <TouchableOpacity
                        key={i}
                        activeOpacity={0.9}
                        onPress={() => this.props.navigation.navigate('Recipe', { recipe: recipe })}>
                        <RecipeCard recipe={recipe} recipeId={recipe.id}/>
                    </TouchableOpacity>
                    )
                }
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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SCREEN_WIDTH * 0.02,
    },
    searchContainer: {
        backgroundColor: colors.background,
        flex: 1,
    },
    searchInputContainer: {
        paddingLeft: 6,
        borderRadius: 20,
    }
});
