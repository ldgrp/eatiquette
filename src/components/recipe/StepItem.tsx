import * as React from 'react';
import { View, ViewStyle, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors } from 'styles/index.style';

interface Props {
    stepNumber: number
    step: string
}

export default class StepItem extends React.Component<Props> {
    state = {
        done: false,
    };

    render() {
        const { stepNumber, step } = this.props;

        return (
            <View style={styles.container}>
            <Text style={styles.stepNumber}>STEP {stepNumber}</Text>
            <View style={styles.textContainer}>
                <View style={styles.gap}>

                </View>
                <Text style={styles.text}>
                    { step }
                </Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 20,
        margin: 10,
        marginBottom: 10,
        borderRadius: 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
    },
    stepNumber: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'italic',
        color: 'rgba(0,0,0,0.3)',
        paddingBottom: 8,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: colors.textBlack,
    },
    gap: {
        width: 50,
    }
});

