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
import { fetchPosts } from '../reducers/feed';
import { Actions } from 'react-native-router-flux';
import Post from '../component/post';

class Feed extends Component {

    componentDidMount() {
        const { authenticated } = this.props;

        if (!authenticated) {
            Actions.login();
        }

        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        const { authenticated } = nextProps;
        if (!authenticated) {
            Actions.login();
        }
        //console.log(nextProps);
    }

    render() {
        const { authenticated } = this.props;
        if (!authenticated) {
            return null;
        }

        return (
            <View style={{flex: 1, marginTop: 50}}>
                <ScrollView style = {{padding: 10}}>
                    {
                        this.props.posts.map( (item, index) => {
                            return <Post key={index} {...item} />
                        })
                    }

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
        user: state.auth.user,
        posts: state.feed.posts,
        error: state.feed.error
    }),
    { logout, fetchPosts }
)(Feed);
