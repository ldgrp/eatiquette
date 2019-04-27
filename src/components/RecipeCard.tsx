import * as React from 'react';
import { 
    Dimensions,
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
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
        return <View style={styles.container}>
            
            <Image source={this.props.image} style={styles.image}/>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={styles.overlay}>
            </LinearGradient>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        </View>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        height: SCREEN_HEIGHT - 270,
        marginBottom:20,
        backgroundColor:'rgba(255,0,0,1)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

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
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.91)'
    },
    subtitle: {
        fontSize: 11,
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
