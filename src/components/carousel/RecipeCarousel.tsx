import * as React from 'react';
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';  // tslint:disable-line

import {
    carouselStyle,
    contentStyle,
    itemWidth,
    paginationStyle,
    sliderWidth,
} from '../../styles/RecipeCarousel.style';

const FIRST_ITEM = 0;

interface Props {
    title: string,
    entries: Recipe[]
}

interface State {
    sliderActiveSlide: number
}

interface Recipe {
    title: string,
    time: number,
    servings: number,
    calories: number,
    image: ImageSourcePropType
}

class RecipeCarousel extends React.Component<Props, State> {
    carousel: any;

    state = {
        sliderActiveSlide: FIRST_ITEM,
    };

    render() {
        return (
            <View>
                <Text style={contentStyle.title}>{this.props.title}</Text>
                <Carousel
                    // @ts-ignore
                    ref={(c: Carousel) => this.carousel = c}
                    data={this.props.entries}
                    renderItem={this.renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={FIRST_ITEM}
                    containerCustomStyle={carouselStyle.container}
                    contentContainerCustomStyle={carouselStyle.contentContainer}
                    onSnapToItem={index => this.setState({ sliderActiveSlide: index })}
                    inactiveSlideScale={0.90}
                    inactiveSlideOpacity={0.8}
                    loop={true}
                />
                <Pagination
                    dotsLength={Object.keys(this.props.entries).length}
                    activeDotIndex={this.state.sliderActiveSlide}
                    containerStyle={paginationStyle.container}
                    dotColor={'rgba(0, 0, 0, 0.70)'}
                    dotStyle={paginationStyle.dot}
                    inactiveDotColor={'rgba(0,0,0,0.9)'}
                    inactiveDotOpacity={0.3}
                    inactiveDotScale={1.0}
                    carouselRef={this.carousel}
                    tappableDots={!!this.carousel}
                />
            </View>
        );
    }

    private renderItem(i: { item: Recipe, index: number }) {
        const { item } = i;

        const sep = '· ';

        const hours = Math.floor(item.time / 60);
        const minutes = item.time % 60;

        const hoursLabel = hours > 0 ? `${hours}h ` : '';
        const minutesLabel = minutes > 0 ? `${minutes}m` : '';
        const servingsLabel = item.servings === 1 ? `${item.servings} serving` : `${item.servings} servings`;
        const caloriesLabel = `${item.calories} cal`;

        return (
            <TouchableOpacity
                style={contentStyle.slideInnerContainer}
                activeOpacity={0.9}
            >
                <View style={contentStyle.imageContainer}>
                    <Image source={item.image} style={contentStyle.image} />
                </View>
                <View style={contentStyle.textContainer}>
                    <Text style={contentStyle.recipeTitle}>{item.title}</Text>
                    <Text style={contentStyle.recipeSubtitle}>
                        {caloriesLabel} {sep}
                        {hoursLabel}{minutesLabel} {sep}
                        {servingsLabel}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default RecipeCarousel;
