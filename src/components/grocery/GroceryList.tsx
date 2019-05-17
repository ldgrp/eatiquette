import * as React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Item from './Item';

import { ListItem } from 'store/grocery/types';
import { AppState } from 'store/index';

interface Props {
    items: Record<number, ListItem>,
}

class GroceryList extends React.Component<Props> {
    render() {
        const items = this.props.items;
        return (
            <FlatList
                data={Object.keys(items)}
                keyExtractor={key => key}
                renderItem={key => (
                    <Item
                        key={key.index}
                        itemId={key.item}
                    />
                )}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    items: state.grocery.items,
});

export default connect(
    mapStateToProps,
)(GroceryList);
