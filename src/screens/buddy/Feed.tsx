import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationComponent } from 'react-navigation';

import { colors } from 'styles/index.style';

interface Props {
    navigation: NavigationComponent
}

export default class FeedScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Feed',
    };
    render() {
        return (
            <SafeAreaView style={styles.main}>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
