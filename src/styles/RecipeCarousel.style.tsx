import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage: number) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(55);
const slideHeight = slideWidth * 1.15;
const itemHorizontalMargin = 0;

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export const contentStyle = StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 9, // needed for shadow
        borderRadius: entryBorderRadius,
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        borderRadius: entryBorderRadius,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        height: undefined,
        width: undefined,
        borderRadius: entryBorderRadius - 1,
    },
    title: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '900',
    },
    recipeTitle: {
        fontSize: 15,
        color: colors.textBlack,
        marginTop: 6,
    },
    recipeSubtitle: {
        fontSize: 11,
        color: colors.subtitleBlack,
    },
    textContainer: {
        marginLeft: 0,
    }
});

export const carouselStyle = StyleSheet.create({
    container: {
        marginTop: 10,
        overflow: 'visible' // for custom animations
    },
    contentContainer: {
        margin: 0,
    }
})

export const paginationStyle = StyleSheet.create({
    container: {
        paddingVertical: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        marginHorizontal: 2
    }
})