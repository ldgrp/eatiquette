import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, ViewStyle, TouchableOpacity } from 'react-native';

interface Props {
    onPress: (e: Event) => void;
    style?: ViewStyle | ViewStyle[];
}

export default class SearchIcon extends React.Component<Props> {
    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
                <Ionicons name="ios-search" size={32} color={'rgba(0,0,0,0.2)'}/>
            </TouchableOpacity>
        );
    }
}
