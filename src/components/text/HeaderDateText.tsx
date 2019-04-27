import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class HeaderDateText extends React.Component<Props> {
    render() {
        return <Text {...this.props} style={[this.props.style, {
            fontFamily: 'System',
            fontSize: 15,
            fontWeight: '500',
            paddingTop: 10,
            color: 'rgba(0,0,0,0.71)',
            textTransform: 'uppercase'
        }]} />;
    }
}

