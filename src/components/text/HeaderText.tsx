import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class HeaderText extends React.Component<Props> {
    render() {
        return <Text {...this.props} style={[this.props.style, {
            fontFamily: 'System',
            fontSize: 34,
            fontWeight: '800',
            paddingBottom: 10,
            color: 'rgba(0,0,0,0.91)'
        }]} />;
    }
}

