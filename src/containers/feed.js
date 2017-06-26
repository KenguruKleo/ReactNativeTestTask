import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Feed
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    feed: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default Feed;
