import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { logout } from '../reducers/auth';
import { Actions } from 'react-native-router-flux';

class Feed extends Component {

    componentDidMount() {
        const { authenticated } = this.props;

        if (!authenticated) {
            Actions.login();
        }
    }

    componentWillReceiveProps(nextProps){
        const { authenticated } = nextProps;
        if (!authenticated) {
            Actions.login();
        }
    }

    render() {
        const { authenticated } = this.props;
        if (!authenticated) {
            return null;
        }

        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <Text>Feed</Text>
                </ScrollView>
                <TouchableHighlight style={{height: 40, marginRight: 10}} onPress={() => { this.props.logout() }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'right'}}>
                        { this.props.user + ', Logout'}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default connect(
    state => ({
        authenticated: state.auth.authenticated,
        user: state.auth.user
    }),
    { logout }
)(Feed);
