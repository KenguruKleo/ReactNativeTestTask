import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

class EnsureLoggedInContainer extends React.Component {
    componentDidMount() {
        const { authenticated, dispatch } = this.props;

        if (!authenticated) {

        }
    }

    render() {
        if (authenticated) {
            return this.props.children
        } else {
            return null
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authenticated: state.auth.authenticated,
        currentURL: ownProps.location.pathname
    }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer);