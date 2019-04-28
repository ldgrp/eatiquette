import * as React from 'react';
import { Text, TextStyle } from 'react-native';

import { colors } from '../../styles/index.style';

interface Props {
    style?: TextStyle
}
export default class HeaderDateText extends React.Component<Props> {
    render() {
        return <Text {...this.props} style={[this.props.style, {
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            paddingTop: 10,
            color: colors.headerDateBlack,
            textTransform: 'uppercase',
        }]} />;
    }
}
