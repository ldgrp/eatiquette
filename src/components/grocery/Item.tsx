import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { deleteItem, toggleDoneItem } from 'store/grocery/actions';
import { GroceryActionTypes, ListItem } from 'store/grocery/types';
import { AppState } from 'store/index';
import { colors } from '../../styles/index.style';

import SwipeableRow from './SwipeableRow';

interface Props {
    itemId: number,
    item: ListItem,
    onToggleDoneItem: (id: number) => void,
    onDeleteItem: (id: number) => void,
}

class Item extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { name, description, done } = this.props.item;
        const id = this.props.itemId;
        const iconName = done ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off';
        const strikethrough = done ? styles.textDone : null;
        return (
            <SwipeableRow
                done={done}
                deleteAction={() => this.props.onDeleteItem(id)}
                doneAction={() => this.props.onToggleDoneItem(id)}>
            <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.container}
                    onPress={ () => this.props.onToggleDoneItem(id) }
            >
                <View style={styles.row}>

                <Ionicons name={iconName} size={20} color={'grey'}/>
                <View style={styles.textContainer}>
                <Text style={[styles.name, strikethrough]} numberOfLines={1}>{name}</Text>
                <Text style={[styles.description, strikethrough]} numberOfLines={1}>{description}</Text>
                </View>
                </View>
            </TouchableOpacity>
            </SwipeableRow>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: Partial<Props>) => ({
    item: state.grocery.items[ownProps.itemId]
});

const mapDispatchToProps = (dispatch: Dispatch<GroceryActionTypes>) => ({
    onDeleteItem: (id: number) =>  dispatch(deleteItem(id)),
    onToggleDoneItem: (id: number) => (dispatch(toggleDoneItem(id))),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Item);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 55,
        backgroundColor: 'white',
        padding: 12,
        paddingHorizontal: 15,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textContainer: {
        marginLeft: 10,
    },
    textDone: {
        textDecorationLine: 'line-through',
    },
    row: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 17,
        color: colors.textBlack,
    },
    description: {
        fontSize: 13,
        color: 'rgba(0,0,0,0.6)',
    },
});
