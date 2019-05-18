import * as React from 'react';
import {
    Image, Text, StyleSheet, SafeAreaView, View, Dimensions,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';
import { LinearGradient } from 'expo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
    navigation: NavigationComponent
}

interface State {
    currentStep: number
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class FocusedRecipe extends React.Component<Props, State> {
    carousel: any;
    state = {
        currentStep: 0,
    };

    ingredients!: string[];
    procedure!: string[];
    readyInMinutes!: number;

    componentWillMount() {
        const { navigation } = this.props;
        const ingredients = navigation.getParam('ingredients');
        const procedure = navigation.getParam('procedure');
        const readyInMinutes = navigation.getParam('readyInMinutes');

        this.ingredients = ingredients.split('\n');
        this.procedure = procedure.split('\n');
        this.readyInMinutes = readyInMinutes;

        this.procedure = ['Prepare the ingredients', ...this.procedure];
    }

    render() {
        const { currentStep } = this.state;
        return (
            <SafeAreaView style={styles.main}>
                <LinearGradient colors={['rgba(20,20,20,1)', 'rgba(13,13,13,1)', 'black']} style={styles.gradient} />
                <Pagination
                    dotsLength={this.procedure.length - 1}
                    activeDotIndex={this.state.currentStep - 1}
                    containerStyle={paginationStyle.container}
                    dotColor={'rgba(255, 255, 255, 0.70)'}
                    dotStyle={paginationStyle.dot}
                    inactiveDotColor={'rgba(255,255,255,0.9)'}
                    inactiveDotOpacity={0.3}
                    inactiveDotScale={1.0}
                    carouselRef={this.carousel}
                    tappableDots={!!this.carousel}
                />
                <Carousel
                    // @ts-ignore
                    ref={(c: Carousel) => this.carousel = c}
                    data={this.procedure}
                    renderItem={this.renderItem}
                    containerCustomStyle={{ marginTop: 30, flexGrow: 0 }}
                    firstItem={0}
                    itemWidth={SCREEN_WIDTH * 0.85}
                    sliderWidth={SCREEN_WIDTH}
                    onSnapToItem={index => this.setState({ currentStep: index })}
                />
                <Image source={require('../../../assets/dark.jpg')} style={styles.image} />
            </SafeAreaView>
        );
    }

    renderItem(i: { item: string, index: number }) {
        const { item, index } = i;
        const stepText = index === 0 ? 'mise en place' : `step ${index}`;
        const procedureStep = index === 0 ? 'Prepare the ingredients' : item;
        return (
            <View style={styles.container}>
                <View style={styles.stepContainer}>
                    <Text style={styles.step}>{stepText}</Text>
                </View>
                <LinearGradient colors={['rgba(13,13,13,1)', 'transparent']} style={styles.gap} />
                <ScrollView>
                    <Text style={styles.text}>{procedureStep}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        backgroundColor: 'rgba(13,13,13,1)',
        padding: 15,
        height: SCREEN_HEIGHT * 0.65,
    },
    gap: {
        height: 10,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: SCREEN_HEIGHT * 0.6,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    step: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 20,
        fontWeight: '300',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    stepContainer: {
        marginHorizontal: -15,
        paddingBottom: 10,
        borderColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        marginTop: 10,
        color: 'rgba(255,255,255,0.95)',
        fontSize: 30,
        fontWeight: '500',
    },
})

const paginationStyle = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
});