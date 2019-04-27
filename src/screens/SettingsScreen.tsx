import * as React from 'react';
import { StyleSheet, ScrollView, Text} from 'react-native';
import { colors } from '../styles/index.style';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.main}>
                <Text>Settings</Text>
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
