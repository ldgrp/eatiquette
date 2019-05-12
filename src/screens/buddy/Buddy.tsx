import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { colors } from 'styles/index.style';

export default class BuddyScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.main}>
                <Text>Buddy System</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
