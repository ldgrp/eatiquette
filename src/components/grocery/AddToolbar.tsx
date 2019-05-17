import * as React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    ViewStyle,
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addItem } from 'store/grocery/actions';
import { GroceryActionTypes } from 'store/grocery/types';

interface State {
    name: string,
    description: string,
    disabled: boolean,
}

interface Props {
    addItem: (name: string, description: string) => void,
    style: ViewStyle[];
}

class AddToolbar extends React.Component<Props, State> {
    state = {
        name: '',
        description: '',
        disabled: false,
    };

    componentWillUnmount = () => {
        this.handleAddItem();
    }

    handleAddItem = () => {
        const { name, description } = this.state;
        const trimName = name.trim();
        const trimDescription = description.trim();

        if (trimName === '' && trimDescription === '') {
            return;
        }

        if (trimName !== '') {
            this.props.addItem(trimName, trimDescription);
        }

        return;

    }

    render() {
        return (
        <View style={this.props.style}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoFocus={true}
                    blurOnSubmit={false}
                    value={this.state.name}
                    style={styles.input}
                    onChangeText={text => this.setState({ name: text })}
                    placeholder={'Item Name'}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    blurOnSubmit={false}
                    value={this.state.description}
                    style={styles.input}
                    onChangeText={text => this.setState({ description: text })}
                    placeholder={'Notes'}
                />
            </View>
        </View>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GroceryActionTypes>) => ({
    addItem: (name: string, description: string) => dispatch(addItem({ name, description, done: false })),
});

export default connect(
    null,
    mapDispatchToProps,
)(AddToolbar);

const styles = StyleSheet.create({
    inputContainer: {
        // borderRadius: 10,
        marginBottom: 10,
        // backgroundColor: 'rgba(0,0,0,0.1)',
    },
    input: {
        fontSize: 17,
        paddingLeft: 8,
        height: 40,
    },
});
