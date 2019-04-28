import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { colors } from '../../styles/index.style';

export interface IItem {
    name: string,
    description: string,
    done: boolean,
    id: number,
}

export interface Props extends IItem {
    setDone(id: number): void,
}

export default class Item extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const iconName = this.props.done ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off';
        const strikethrough = this.props.done ? styles.textDone : null;
        return (
            <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.container}
                    onPress={() => this.props.setDone(this.props.id)}
                >
                <View style={styles.row}>

                <Ionicons name={iconName} size={20} color={'grey'}/>
                <View style={styles.textContainer}>
                <Text style={[styles.name, strikethrough]}>{this.props.name}</Text>
                <Text style={[styles.description, strikethrough]}>{this.props.description}</Text>
                </View>
                </View>
            </TouchableOpacity>
        );
    }
}

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
