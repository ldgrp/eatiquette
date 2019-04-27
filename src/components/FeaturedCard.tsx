import * as React from 'react';
import { 
    Dimensions,
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {LinearGradient} from 'expo';

let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

let BORDER_RADIUS= 12;


interface Props {
    title: string,
    subtitle: string,
    image: ImageSourcePropType,
}


class RecipeCard extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
    return <TouchableOpacity style={styles.container} activeOpacity={0.9}>
            <Image source={this.props.image} style={styles.image}/>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.overlay}>
            </LinearGradient>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        </TouchableOpacity>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        height: SCREEN_HEIGHT - 326,
        marginBottom: 20,
        backgroundColor:'rgba(255,0,0,0)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,

        elevation: 8,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        height: undefined,
        width: undefined,
        borderRadius: 12,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: BORDER_RADIUS
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 0.91)'
    },
    subtitle: {
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.91)',
        textTransform: 'uppercase'
    },
    textContainer: {
        position: 'absolute',
        left: 20,
        right: 0,
        bottom: 30,
    }
});

export default RecipeCard;
