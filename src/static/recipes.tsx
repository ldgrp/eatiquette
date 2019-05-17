import { Recipe } from 'store/recipes/types';

export const BREAKFAST = [
    {
        title: 'Good Old-fashioned Pancakes',
        time: 20,
        servings: 8,
        calories: 158,
        image: require('../../assets/pancakes.jpg'),
    },
    {
        title: 'Avocado Toast',
        time: 20,
        servings: 8,
        calories: 158,
        image: require('../../assets/avocado_toast.jpg'),
    },
    {
        title: 'Vanilla Yogurt',
        time: 5,
        servings: 1,
        calories: 70,
        image: require('../../assets/yogurt.jpg'),
    },
];

export const LUNCH = [
    {
        title: 'Barley and Raw Veg Power Salad',
        time: 45,
        servings: 4,
        calories: 158,
        image: require('../../assets/barley_salad.jpeg'),
    },
    {
        title: 'Tuna and Salad Mini Wraps',
        time: 15,
        servings: 8,
        calories: 158,
        image: require('../../assets/tuna_wraps.jpeg'),
    },
];

export const RECIPES: Recipe[] = [
    {
        id: 0,
        name: 'Good Old-fashioned Pancakes',
        image: require('../../assets/pancakes.jpg'),
        readyInMinutes: 30,
        calories: 421,
        servings: 4,
        meals: ['Breakfast'],
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        cheap: true,
        eatiquetteScore: 80,
        rating: 4.5,
        pricePerServing: 121,
        ingredients: "5 g Agar powder\n100 g Sugar\n500 g Water\n75 g Milk\n1/2 tsp Almond extract\n6 T Fruit cocktail\n150 ml Syrup",
        steps: "Put agar, sugar, and water in a saucepan and bring to boil.\nTake off heat, and drain some of the water.\nWhen cool, add in milk and almond extract.\nPour mixture into tin.\nWhen completely cool, chill in the refrigerator for about 15 minutes until set.\nCut almond jelly into cubes.\nServe with fruit cocktail and syrup in a glass bowl",
    },
    {
        id: 1,
        name: 'Avocado Toast',
        image: require('../../assets/avocado_toast.jpg'),
        readyInMinutes: 10,
        calories: 156,
        servings: 2,
        meals: ['Breakfast'],
        vegetarian: true,
        vegan: true,
        glutenFree: false,
        cheap: false,
        eatiquetteScore: 95,
        rating: 5.0,
        pricePerServing: 250,
        ingredients: undefined,
        steps: undefined,
    },
    {
        id: 2,
        name: 'Vanilla Yogurt',
        image: require('../../assets/yogurt.jpg'),
        readyInMinutes: 5,
        calories: 201,
        servings: 1,
        meals: ['Breakfast'],
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        cheap: true,
        eatiquetteScore: 60,
        rating: 3.5,
        pricePerServing: 312,
        ingredients: undefined,
        steps: undefined,
    },
]