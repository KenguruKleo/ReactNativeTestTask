import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Alert
} from 'react-native';


const Post = props => {
    const { author, title, description } = props;
    return (
        <View style={{height: 100, padding: 10, marginBottom: 25}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'left'}}>
                { author }
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
                { title }
            </Text>
            <Text style={{fontSize: 14, textAlign: 'left'}}>
                { description }
            </Text>
        </View>
    );
}

export default Post;
