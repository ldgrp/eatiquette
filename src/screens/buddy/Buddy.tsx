import * as React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationComponent } from 'react-navigation';
import { connect } from 'react-redux';
import Modal from "react-native-modal"; // tslint:disable-line
import { Dispatch } from 'redux';

import HeaderTitle from 'components/text/HeaderTitle';
import { AppState, store } from 'store';
import { activateBuddy } from 'store/buddy/actions';
import { BuddyActionTypes } from 'store/buddy/types';
import { colors } from 'styles/index.style';

interface Props {
    navigation: NavigationComponent
}

export default class BuddyScreen extends React.Component<Props> {
    static navigationOptions = {
        header: null,
    };

    state = {
        isModalVisible: false,
    };

    render() {
        return (
            <SafeAreaView style={styles.main}>
            <Modal
                isVisible={this.state.isModalVisible}
                onSwipeComplete={() => {
                    this.setState({ isModalVisible: false });
                    store.dispatch(activateBuddy());
                    this.props.navigation.navigate('Feed');
                }}
                swipeDirection={['down']}
            >
                <View style={{ flex: 1, padding: 20, backgroundColor: colors.background, alignItems: 'center' }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 24, marginBottom: 50 }}>Meet your new buddy!</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
                        <Image source={require('../../../assets/boy.jpg')}
                                style={{ width:300, height:300, borderRadius: 150 }} />
                        <Text style={{ fontSize: 24, marginTop: 30, fontWeight: '500' }}>Justin</Text>
                    </View>
                </View>
            </Modal>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <HeaderTitle>Buddy</HeaderTitle>
                </View>
                <View style={styles.buttons}>
                    <BuddyButton onPress={() => this.setState({ isModalVisible: true })}/>
                    <Text style={{ fontSize: 16, paddingVertical:10 }}>or</Text>
                    <Button
                        title="Connect to Facebook"
                    />

                </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const _BuddyButton = (props: {onPress(): void}) => {
    return <Button
        title={'Get Buddy'}
        onPress={() => props.onPress()}
    />;
};

const mapStateToProps = (state: AppState) => ({
    on: state.buddy.on,
});

const mapDispatchToProps = (dispatch: Dispatch<BuddyActionTypes>) => ({
    activateBuddy: () => dispatch(activateBuddy()),
});

const BuddyButton = connect(mapStateToProps, mapDispatchToProps)(_BuddyButton);

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingVertical: SCREEN_WIDTH * 0.04,
        marginHorizontal: SCREEN_WIDTH * 0.04,
    },
    buttons: {
        flex: 1,
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
