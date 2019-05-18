import * as React from 'react';
import { AppState } from "store";
import { connect } from "react-redux";
import { ActivityIndicator, View } from 'react-native';
import { colors } from 'styles/index.style';

interface Props {
    isFetching: boolean
}

class SearchSpinner extends React.PureComponent<Props> {
    render() {
        const { isFetching } = this.props;

        return (
            !isFetching ? <View /> :
            <ActivityIndicator size="small" color={colors.green} />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    isFetching: state.search.isFetching,
});

export default connect(mapStateToProps)(SearchSpinner);
