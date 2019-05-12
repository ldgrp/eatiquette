import * as React from 'react';
import { View } from 'react-native';
import HeaderSubtitle from '../text/HeaderSubtitle';
import HeaderTitle from '../text/HeaderTitle';

const NAMED_DAY = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const NAMED_MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

interface Props {
    date: Date,
}

const Header: React.SFC<Props> = (props: Props) => {
    const { date } = props;
    const day = date.getDate();
    const namedMonth = NAMED_MONTH[date.getMonth()];
    const namedDay = NAMED_DAY[date.getDay()];

    return (
        <View>
            <HeaderSubtitle>{day} {namedMonth}</HeaderSubtitle>
            <HeaderTitle>{namedDay}</HeaderTitle>
        </View>
    );
};

export default Header;
