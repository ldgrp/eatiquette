import * as React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';

import {sliderWidth, itemWidth} from '../styles/RecipeCarousel.style';
import {contentStyle, carouselStyle, paginationStyle} from "../styles/RecipeCarousel.style";
import Carousel, { Pagination } from 'react-native-snap-carousel';

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
    _carousel = undefined;

    constructor (props: Props) {
        super(props);
        this.state = {
            sliderActiveSlide: FIRST_ITEM
        };
    }

    _renderItem(i: {item: Recipe, index: number}) {
        const {item, index} = i;

        let sep = '· ';

        let hours = Math.floor(item.time/60)
        let minutes = item.time % 60

        let hoursLabel = hours > 0 ? `${hours}h ` : "";
        let minutesLabel = minutes > 0 ? `${minutes}m` : "";
        let servingsLabel = item.servings == 1 ? `${item.servings} serving` : `${item.servings} servings`
        let caloriesLabel = `${item.calories} cal`;

        return(
        <TouchableOpacity 
            style={contentStyle.slideInnerContainer}
            activeOpacity={0.9}
            >
            <View style={contentStyle.imageContainer}>
                <Image source={item.image} style={contentStyle.image}/>
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

    render() {
        return (
            <View>
            <Text style={contentStyle.title}>{this.props.title}</Text>
            <Carousel
                ref={c => this._carousel = c}
                data={this.props.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={FIRST_ITEM}
                containerCustomStyle={carouselStyle.container}
                contentContainerCustomStyle={carouselStyle.contentContainer}
                onSnapToItem={(index) => this.setState({ sliderActiveSlide: index })}
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
                  carouselRef={this._carousel}
                  tappableDots={!!this._carousel}
            />
            </View>
        );
    }
}

export default RecipeCarousel;