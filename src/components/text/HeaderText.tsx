import * as React from 'react';
import { Text, TextStyle } from 'react-native';

import { colors } from '../../styles/index.style';

interface Props {
    style?: TextStyle
}

export default class HeaderText extends React.Component<Props> {
    render() {
        return <Text {...this.props} style={[this.props.style, {
            fontFamily: 'System',
            fontSize: 41,
            fontWeight: '800',
            paddingBottom: 10,
            color: colors.headerBlack,
        }]} />;
    }
}
