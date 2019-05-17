import * as React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

interface Props {
    done: boolean,
    doneAction: () => void,
    deleteAction: () => void,
}

export default class SwipeableRow extends React.Component<Props> {
    _swipeableRow!: Swipeable;

    onDone = () => {
        this.props.doneAction();

    }
    renderLeftActions = (progress: Animated.Value) => {
        const width = 80;
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-width, 0],
        });

        return (
            <View style={{ width, flexDirection: 'row' }}>
                <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                    <RectButton style={[styles.action, styles.doneAction]} onPress={this.onDone}>
                        <Text style={styles.actionText}>Done</Text>
                    </RectButton>
                </Animated.View>
            </View>
        );
    }
    renderRightActions = (progress: Animated.Value) => {
        const width = 80;
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [width, 0],
        });

        return (
            <View style={{ width, flexDirection: 'row' }}>
                <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                    <RectButton style={[styles.action, styles.deleteAction]} onPress={this.props.deleteAction}>
                        <Text style={styles.actionText}>Delete</Text>
                    </RectButton>
                </Animated.View>
            </View>
        );
    }

    updateRef = (ref: Swipeable) => {
        this._swipeableRow = ref;
    }
    close = () => {
        this._swipeableRow.close();
    }
    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                leftThreshold={30}
                rightThreshold={40}
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}>
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    doneAction: {
        backgroundColor: '#2cdd00',
    },
    undoneAction: {
        backgroundColor: '#dd2c00',
    },
    deleteAction: {
        backgroundColor: '#dd2c00',
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
});
