import * as React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View, Dimensions } from 'react-native';
import { colors } from 'styles/index.style';
import HeaderTitle from 'components/text/HeaderTitle';
import { ListItem } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MEAL_PLAN = [
    { name: 'Logging', },
    { name: 'Units', },
    { name: 'Notifications', },
]

const SUPPORT = [
    { name: 'Privacy', },
    { name: 'Terms & Conditions', },
    { name: 'About', },
]

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <SafeAreaView style={styles.main}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <HeaderTitle>Settings</HeaderTitle>
                </View>

                <ListItem
                    leftAvatar={{source: {uri: "https://i.pravatar.cc/100"}}}
                    title={'Brandon S.'}
                    titleStyle={{fontSize: 24}}
                    subtitle={'Male  65kg  180cm'}
                    subtitleStyle={{color: 'rgba(0,0,0,0.7)'}}
                    chevron
                    topDivider
                    bottomDivider
                />

                <View>
                    <Text style={styles.groupText}>Meal Planner</Text>
                    {
                        MEAL_PLAN.map((item, index) => (
                            <ListItem
                                key={index}
                                title={item.name}
                                chevron
                                topDivider={index === 0}
                                bottomDivider
                            />
                        ))
                    }
                </View>
                <View>
                    <Text style={styles.groupText}>Support</Text>
                    {
                        SUPPORT.map((item, index) => (
                            <ListItem
                                key={index}
                                title={item.name}
                                chevron
                                topDivider={index === 0}
                                bottomDivider
                            />
                        ))
                    }
                </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        paddingVertical: SCREEN_WIDTH * 0.04,
    },
    groupText: {
        fontSize: 14,
        paddingTop: 20,
        paddingBottom: 5,
        paddingHorizontal: 14,
        textTransform: 'uppercase',
        color: '#8a8a8a',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SCREEN_WIDTH * 0.04,
    },
});
