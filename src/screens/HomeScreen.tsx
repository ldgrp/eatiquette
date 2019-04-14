import * as React from 'react';
import { 
    Dimensions,
    SafeAreaView,
    Text, 
    ScrollView,
    StyleSheet,
    View 
} from 'react-native';
import RecipeCard from '../components/RecipeCard';

import HeaderText from '../components/text/HeaderText';
import HeaderDateText from '../components/text/HeaderDateText';


let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
            <View style={styles.header}>
                <HeaderDateText style={{}}>16 April</HeaderDateText>
                <HeaderText style={{}}>Tuesday</HeaderText>
            </View>
                <RecipeCard title="Braised Miso Carrots" subtitle="with Quinoa"/>
                <RecipeCard title="Roasted Beancurd" subtitle="on bed of vegetables"/>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SCREEN_WIDTH * 0.04
    },
    header: {
    }
});
