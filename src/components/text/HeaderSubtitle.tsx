import * as React from 'react';
import { Text, TextStyle } from 'react-native';

import { colors } from 'styles/index.style';

interface Props {
    style?: TextStyle
}

const HeaderSubtitle: React.SFC<Props> = (props: Props) => (
        <Text {...props} style={[props.style, {
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            paddingTop: 10,
            color: colors.headerSubtitle,
            textTransform: 'uppercase',
        }]} />
);

export default HeaderSubtitle;
