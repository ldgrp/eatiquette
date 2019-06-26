import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { colors } from 'styles/index.style';

const Ring = ({ percent, label }) => {
    const SCREEN_WIDTH = Dimensions.get('screen').width;
    const WIDTH = SCREEN_WIDTH * 0.25;

    return (
        <View style={styles.container}>
            <Progress.Circle
                progress={percent}
                size={WIDTH}
                borderWidth={1}
                thickness={6}
                color={colors.green}
                showsText={true}
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        marginTop:10,
    },
})

export default Ring;