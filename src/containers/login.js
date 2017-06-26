import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Login
                </Text>
                <TextInput
                    style={{width: '50%', borderColor: 'gray', borderWidth: 1}}
                    placeholder={'Your login'}
                />
                <TextInput
                    style={{width: '50%', borderColor: 'gray', borderWidth: 1}}
                    placeholder={'Your password'}
                    secureTextEntry={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }
});

export default Login;
