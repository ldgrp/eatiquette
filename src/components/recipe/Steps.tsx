import * as React from 'react';
import { View, ViewStyle, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors } from 'styles/index.style';
import StepItem from './StepItem';

interface Props {
    data: string | undefined;
}

export default class Steps extends React.PureComponent<Props> {
    render() {
        const { data: rawSteps } = this.props;

        if (typeof rawSteps === 'undefined') {
            return <View/>;
        }

        const steps = rawSteps.split('\n');

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Directions</Text>
                {
                    steps.map((ingredient, i) =>
                        <StepItem
                            key={i}
                            stepNumber={i+1}
                            step={ingredient}
                        />,
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    title: {
        fontSize: 20,
        color: colors.textBlack,
        marginBottom: 10,
        flex: 1,
    },
});
