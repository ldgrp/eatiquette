import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/index.style';
import { Dispatch } from 'redux';
import { SearchActionTypes } from 'store/search/types';
import { fetchRecipes } from 'store/search/actions';
import { connect } from 'react-redux';

interface Props {
    onSearch: (keyword: string) => void;
}

interface State {
    text: string
}

const SearchBarIcon = () => (
    <Ionicons name="ios-search" size={20} color={'rgba(0,0,0,0.2)'}/>
)

class RecipeSearchBar extends React.Component<Props, State> {
    state = {
        text: '',
    };

    render() {
        const { text } = this.state;

        return (
            <SearchBar
                placeholder="Search"
                onChangeText={t => this.setState({ text:t })}
                lightTheme={true}
                platform={'ios'}
                searchIcon={SearchBarIcon}
                value={text}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
                //onCancel={this.onCancel}
                onClear={() => this.setState({ text: '' })}
                onSubmitEditing={() => this.props.onSearch(text)}
            />
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<SearchActionTypes>) => ({
    onSearch: (keyword: string) => dispatch(fetchRecipes(keyword)),
});

export default connect(
    null,
    mapDispatchToProps,
)(RecipeSearchBar);

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: colors.background,
        flex: 1,
    },
    searchInputContainer: {
        paddingLeft: 6,
        borderRadius: 20,
    },
});
