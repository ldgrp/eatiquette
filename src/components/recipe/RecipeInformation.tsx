import * as React from 'react';
import { Button, StyleSheet, View, Text, ViewStyle, TouchableOpacity } from "react-native";
import { colors } from 'styles/index.style';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    readyInMinutes: number
    servings: number
    calories: number
}

interface State {
    servings: number
}

interface ServingsButtonProps {
    style?: ViewStyle
    icon: string
    onClick: (e: Event) => void;
}

const ServingsButton = (props: ServingsButtonProps) => {
    const { style, icon } = props;
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={props.onClick}
            activeOpacity={0.5}
        >
            <Ionicons size={15} name={icon}/>
        </TouchableOpacity>
    );
}

export default class RecipeInformation extends React.Component<Props, State> {
    state = {
        servings:  this.props.servings,
    }

    updateServings = (servings: number) => {
        if (servings > 0) {
            this.setState({ servings });
        }
    }

    render() {
        const { readyInMinutes, calories } = this.props;
        const { servings } = this.state;
        const hours = Math.floor(readyInMinutes / 60);
        const minutes = readyInMinutes % 60;

        const hoursLabel = hours > 0 ? `${hours}h ` : '';
        const minutesLabel = minutes > 0 ? `${minutes}m` : '';
        const caloriesLabel = `${calories} cal`;

        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                <Text style={styles.title}>Ready In</Text>
                <Text style={styles.text}>{hoursLabel}{minutesLabel}</Text>
                </View>

                <View style={{flex: 1}}>
                <Text style={styles.title}>Servings</Text>
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                        <ServingsButton icon={'ios-remove'}
                            onClick={() => this.updateServings(servings - 1)} />
                        <Text style={[styles.text, {marginHorizontal: 20}]}>{servings}</Text>
                        <ServingsButton icon={'ios-add'}
                            onClick={() => this.updateServings(servings + 1)} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.textBlack,
        paddingBottom: 5,
    },
    text: {
        fontSize: 15,
        color: colors.subtitleBlack,
    },
    button: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 8,
        paddingTop: 4,
        borderRadius: 4,
        overflow: 'hidden',
        aspectRatio: 1,
    },
});
