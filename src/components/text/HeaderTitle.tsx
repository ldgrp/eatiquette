import * as React from 'react';
import { Text, TextStyle } from 'react-native';

import { colors } from 'styles/index.style';

interface Props {
    style?: TextStyle
}

const HeaderTitle: React.SFC<Props> = (props: Props) => (
    <Text {...props} style={[props.style, {
        fontFamily: 'System',
        fontSize: 41,
        fontWeight: '800',
        paddingBottom: 10,
        color: colors.headerTitle,
    }]} />
);

export default HeaderTitle;
