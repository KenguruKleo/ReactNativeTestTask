import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';

class LoginWrapper extends React.Component {
    componentDidMount() {
        const { authenticated, dispatch } = this.props;

        if (!authenticated) {
            //Actions.login();
        }
    }

    render() {
        return <Text>Test</Text>
        // if (authenticated) {
        //     return null; //this.props.children
        // } else {
        //     return null
        // }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.auth.authenticated,
        currentURL: ownProps.location.pathname
    }
}

export default connect(mapStateToProps)(LoginWrapper);