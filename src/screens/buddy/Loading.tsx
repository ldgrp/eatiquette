import * as React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';
import { connect } from 'react-redux';

import { AppState } from 'store';

interface Props {
    navigation: NavigationComponent,
    on: boolean,
}

class Loading extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.props.navigation.navigate(this.props.on ? 'Feed' : 'Buddy');
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    on: state.buddy.on,
});

export default connect(mapStateToProps)(Loading);
